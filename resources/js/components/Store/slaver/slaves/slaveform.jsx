import { useState, useEffect } from "react";
import axios from "axios";
const SlaveForm = () => {
    const [generatedId, setGeneratedId] = useState("");
    const [name, setName] = useState("");
    const [race, setRace] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    useEffect(() => {
        axios
            .get(" http://127.0.0.1:8000/api/product/generate-id")
            .then((response) => {
                setGeneratedId(response.data.id);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <>
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    Register A Slave
                </h1>
                <form>
                    <div className="grid gap-6 mb-8 md:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product ID</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={generatedId}
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
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Pick an image
                                </span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered w-full max-w-xs"
                            />
                        </div>
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
                    <div className="grid gap-6 mb-8 md:grid-cols-2">
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
                        <div className="py-10">
                            <button className="btn btn-wide btn-lg">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SlaveForm;
