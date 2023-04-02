import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../../actions/slaver/getproduct";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css";

// Import any additional plugins you want to use
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFilePoster from "filepond-plugin-file-poster";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

registerPlugin(
    FilePondPluginFilePoster,
    FilePondPluginFileEncode,
    FilePondPluginImagePreview
);

const SlaveEdit = () => {
    const url = process.env.MIX_API_URL;
    const { custom_id } = useParams(); // extract the product ID from the URL parameter
    const [product, setProduct] = useState({});
    const [image, setImage] = useState([]);
    const dispatch = useDispatch();

    const { data } = useSelector((state) => state.getproduct);
    useEffect(() => {
        dispatch(getProduct(custom_id));
    }, []);
    useEffect(() => {
        setProduct(data);
    }, [data]);

    const server = {
        process: `${url}/product/upload-tmp`,
        revert: `${url}/product/delete-tmp`,
    };
    return (
        <>
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    Register A Slave
                </h1>
                <form encType="multipart/form-data">
                    <div className="grid gap-6 mb-8 md:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Custom ID</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={product.custom_id}
                                readOnly
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-md"
                                value={product.price}
                                onChange={(e) =>
                                    setProduct({
                                        ...product,
                                        price: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="grid gap-6 mb-8 md:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-md"
                                value={product.name}
                                onChange={(e) =>
                                    setProduct({
                                        ...product,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="form-control mb-8">
                            <label className="label">
                                <span className="label-text">Race</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-md"
                                value={product.race}
                                onChange={(e) =>
                                    setProduct({
                                        ...product,
                                        race: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>

                    <div className="grid gap-6 mb-8 md:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Add or Delete Images
                                </span>
                            </label>
                            <FilePond
                                name="image"
                                allowMultiple={true}
                                files={
                                    product.product_images?.map((image) => ({
                                        source: image.image,
                                        options: {
                                            type: "local",
                                            file: {
                                                name: image.image,
                                                type: image.type,
                                                size: image.size,
                                            },
                                            metadata: {
                                                poster: `/storage/products/${product.id}/images/${image.image}`,
                                            },
                                        },
                                    })) || []
                                }
                                onupdatefiles={(fileItems) => {
                                    setImage(
                                        fileItems.map(
                                            (fileItem) => fileItem.file
                                        )
                                    );
                                }}
                                server={server}
                                credits={false}
                            />
                        </div>
                        <div className="form-control mb-8">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                placeholder="Type here"
                                className="input input-bordered w-full input-lg max-w-md h-32"
                                value={product.description}
                                onChange={(e) =>
                                    setProduct({
                                        ...product,
                                        description: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="py-10">
                        <button className="btn btn-wide btn-lg" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SlaveEdit;
