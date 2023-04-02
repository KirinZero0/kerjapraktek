import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allProduct } from "../../../../actions/slaver/allproduct";

const SlaveTable = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const { data } = useSelector((state) => state.allproduct);
    useEffect(() => {
        dispatch(allProduct());
    }, []);
    useEffect(() => {
        setProducts(data);
    }, [data]);

    return (
        <>
            <div className="overflow-x-auto w-full px-2">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Race</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>
                                    <div className="flex items-center space-x-2">
                                        <div>
                                            <div className="font-bold">
                                                {product.custom_id}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                {product.product_images.length >
                                                    0 && (
                                                    <img
                                                        src={`/storage/products/${product.id}/images/${product.product_images[0].image}`}
                                                        alt="Avatar Tailwind CSS Component"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                {product.name}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{product.race}</td>
                                <td>{product.description}</td>
                                <td>${product.price}</td>
                                <th>
                                    <Link
                                        to={`/store-slaver/slaves/slave-edit/${product.custom_id}`}
                                        className="btn btn-xl"
                                    >
                                        Edit
                                    </Link>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                    {/* foot */}
                </table>
                <a
                    href="/store-slaver/slaves/slave-form"
                    className="fixed z-90 bottom-10 right-8 bg-zinc-500 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-zinc-400 hover:drop-shadow-2xl hover:animate-bounce duration-300"
                >
                    +
                </a>
            </div>
        </>
    );
};

export default SlaveTable;
