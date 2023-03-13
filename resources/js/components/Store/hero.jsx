const Hero = () => {
    return (
        <>
            <section className="bg-base-200">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                            Come on, don't be shy, buy some slaves
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            Low on human resources? We have the solution for
                            you, Slaves!, price start from $999
                        </p>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img
                            src="https://i0.wp.com/werehistory.org/wp-content/uploads/2015/01/14766448604_aef292289c_o.jpg?resize=700%2C467&ssl=1"
                            alt="mockup"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
