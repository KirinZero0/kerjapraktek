import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allProduct } from "../../actions/slaver/allproduct";
import { allStoreProduct } from "../../actions/store/products";
import { addCart } from "../../actions/store/addcart";

const Products = () => {
    const dispatch = useDispatch();
    const { data, pagination } = useSelector((state) => {
        // console.log(state.products.pagination);
        return state.products;
    });
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    const handleScroll = useCallback(() => {
        // console.log("Scrolling...");
        if (
            window.innerHeight + window.pageYOffset >=
            document.body.offsetHeight
        ) {
            if (pagination && pagination.current_page < pagination.last_page) {
                // console.log(`Current page: ${pagination.current_page}`);
                // console.log(`Last page: ${pagination.last_page}`);
                setPage((prevPage) => prevPage + 1);
            }
        }
    }, [pagination, page]);

    useEffect(() => {
        dispatch(allStoreProduct(page));
    }, [dispatch, page]);

    useEffect(() => {
        setProducts((prevProducts) => [...prevProducts, ...data]);
    }, [data]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         console.log("scrolling");
    //     });
    // }, []);

    const handleCart = (customId) => {
        dispatch(addCart(customId))
            .then(() => {
                console.log('added to cart');
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <section className="bg-base-100 py-5 px-10">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white py-3 ">
                    Slaves for sale
                </h1>

                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-5 md:gap-12 md:space-y-0">
                    {products.map((product) => (
                        <div
                            className=" flex justify-center  "
                            key={product.id}
                        >
                            <div className="card card-compact w-auto h-2/3 bg-base-300 shadow-xl">
                                <figure>
                                    {product.product_images.length > 0 && (
                                        <img
                                            src={`/storage/products/${product.id}/images/${product.product_images[0].image}`}
                                            alt="Avatar Tailwind CSS Component"
                                        />
                                    )}
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {product.name}
                                        <div className="badge badge-secondary">
                                            {product.race}
                                        </div>
                                    </h2>
                                    <p>{product.description}</p>
                                    <div className="card-actions  justify-end ">
                                        <h2 className="text-xl ">
                                            ${product.price}
                                        </h2>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary"
                                            onClick={() =>
                                            handleCart(product.custom_id)
                                            }>
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Products;
