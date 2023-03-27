import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../../actions/slaver/addproduct";
import { useNavigate } from "react-router-dom";
import { generateProductId } from "../../../../actions/slaver/generateid";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

// Import any additional plugins you want to use
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

registerPlugin(FilePondPluginImagePreview);
const SlaveForm = () => {
    const [custom_id, setCustom_Id] = useState("");
    const [name, setName] = useState("");
    const [race, setRace] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { customid } = useSelector((state) => state.generateid);
    useEffect(() => {
        dispatch(generateProductId());
    }, []);
    useEffect(() => {
        setCustom_Id(customid);
    }, [customid]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct(custom_id, name, description, race, price, image))
            .then(() => {
                navigate("/store-slaver/slaves");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const server = {
        process: (fieldName, file, metadata, load, error, progress, abort) => {
            const formData = new FormData();
            formData.append(fieldName, file, file.name);

            axios
                .post(
                    "http://127.0.0.1:8000/api/product/upload-tmp",
                    formData,
                    {
                        onUploadProgress: (progressEvent) => {
                            const progressPercent =
                                (progressEvent.loaded / progressEvent.total) *
                                100;
                            progress(progressPercent);
                        },
                    }
                )
                .then((response) => {
                    load(response.data.path);
                })
                .catch((error) => {
                    console.log(error);
                    error("Oops! Something went wrong.");
                });
        },
        revert: (filename, load, error) => {
            axios
                .delete("http://127.0.0.1:8000/api/product/delete-tmp", {
                    data: {
                        tmp: filename,
                    },
                })
                .then(() => {
                    load();
                })
                .catch((error) => {
                    console.log(error);
                    error("Oops! Something went wrong.");
                });
        },
    };

    return (
        <>
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    Register A Slave
                </h1>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="grid gap-6 mb-8 md:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Custom ID</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={custom_id}
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
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
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
                                onChange={(e) => setName(e.target.value)}
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
                                value={race}
                                onChange={(e) => setRace(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="grid gap-6 mb-8 md:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Pick an image
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
                        <div className="form-control mb-8">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                placeholder="Type here"
                                className="input input-bordered w-full input-lg max-w-md h-32"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
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

export default SlaveForm;
