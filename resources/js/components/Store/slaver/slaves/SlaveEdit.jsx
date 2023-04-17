import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../../actions/slaver/getproduct";
import { FilePond, registerPlugin } from "react-filepond";
import { updateProduct } from "../../../../actions/slaver/updateproduct";
import { updateImage } from "../../../../actions/slaver/updateimage";
import { useNavigate } from "react-router-dom";
import { deleteImage } from "../../../../actions/slaver/deleteimage";
import axios from "axios";
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
    const navigate = useNavigate();

    const { data } = useSelector((state) => state.getproduct);
    useEffect(() => {
        dispatch(getProduct(custom_id));
    }, []);
    useEffect(() => {
        setProduct(data);
    }, [data]);

    const server = {
        process: `${url}/product/upload-tmp`,
        revert: `${url}/product/delete-tmp2`,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            updateProduct(
                product.id,
                product.name,
                product.description,
                product.race,
                product.price
            )
        )
            .then(() => {
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSubmit2 = (e) => {
        e.preventDefault();
        dispatch(updateImage(product.id, image))
            .then(() => {
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleDelete = (id) => {
        dispatch(deleteImage(id))
            .then(() => {
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    Edit Slave Data
                </h1>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="grid gap-6 mb-8 md:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Custom ID</span>
                            </label>
                            <input
                                type="hidden"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={product.id}
                                readOnly
                            />
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
                <h1 className="mt-10 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    Edit Slave Image
                </h1>

                <form onSubmit={handleSubmit2} encType="multipart/form-data">
                    <div className="grid gap-6 mb-8 md:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Add new images
                                </span>
                            </label>
                            <FilePond
                                name="image"
                                allowMultiple={true}
                                files={image}
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
                        {/* <div className="form-control mb-8">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                placeholder="Type here"
                                className="input input-bordered w-full input-lg max-w-md h-32"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div> */}
                    </div>
                    <div className="py-10">
                        <button className="btn btn-wide btn-lg" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    {product.product_images?.map((image) => (
                        <div className=" flex justify-center  " key={image.id}>
                            <div className="card card-compact w-auto h-2/3 bg-base-300 shadow-xl">
                                <figure>
                                    <img
                                        className="object-cover"
                                        src={`/storage/products/${product.id}/images/${image.image}`}
                                        alt={image.image}
                                    />
                                </figure>
                                <div className="card-body">
                                    <div className="card-actions justify-end">
                                        <button
                                            className="btn btn-primary"
                                            onClick={() =>
                                                handleDelete(image.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SlaveEdit;
