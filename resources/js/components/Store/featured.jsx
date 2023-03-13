const Featured = () => {
    return (
        <>
            <section className="bg-base-100 py-5 px-10">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white py-3 ">
                    Featured Slaves
                </h1>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div className=" flex justify-center  ">
                        <div className="card card-compact w-auto h-2/3 bg-base-300 shadow-xl">
                            <figure>
                                <img
                                    className="object-cover"
                                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    alt="Shoes"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Generic European White Guy
                                </h2>
                                <p>Doesnt do anything, complains alot</p>
                                <div className="card-actions  justify-end ">
                                    <h2 className="text-xl ">$1500</h2>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex  justify-center  ">
                        <div className="card card-compact w-auto h-2/3 bg-base-300 shadow-xl">
                            <figure>
                                <img
                                    className="object-cover"
                                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                    alt="Shoes"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Asian Guy</h2>
                                <p>
                                    Highly Inteligent, you might want him to do
                                    some maths
                                </p>
                                <div className="card-actions  justify-end ">
                                    <h2 className="text-xl ">$5600</h2>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex  justify-center ">
                        <div className="card card-compact w-auto h-2/3 bg-base-300 shadow-xl">
                            <figure>
                                <img
                                    className="object-cover"
                                    src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                                    alt="Shoes"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Black Man</h2>
                                <p>
                                    Peak physical condition even though he never
                                    excercises
                                </p>
                                <div className="card-actions  justify-end ">
                                    <h2 className="text-xl ">$10000</h2>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Featured;
