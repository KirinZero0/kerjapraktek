const SlaveTable = () => {
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
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-2">
                                    <div>
                                        <div className="font-bold">00001</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            Hart Hagerty
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>Zemlak, Daniel and Leannon</td>
                            <td>$1</td>
                            <th>
                                <button className="btn  btn-xl">details</button>
                            </th>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-2">
                                    <div>
                                        <div className="font-bold">00001</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            Brice Swyre
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>Carroll Group</td>
                            <td>R$1470</td>
                            <th>
                                <button className="btn  btn-xl">details</button>
                            </th>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-2">
                                    <div>
                                        <div className="font-bold">00001</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            Marjy Ferencz
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>Rowe-Schoen</td>
                            <td>$1200</td>
                            <th>
                                <button className="btn  btn-xl">details</button>
                            </th>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-2">
                                    <div>
                                        <div className="font-bold">00001</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            Yancy Tear
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>Wyman-Ledner</td>
                            <td>$9999</td>
                            <th>
                                <button className="btn  btn-xl">details</button>
                            </th>
                        </tr>
                    </tbody>
                    {/* foot */}
                </table>
                <a
                    href="/StoreSlaver/Slaves/SlaveForm"
                    className="fixed z-90 bottom-10 right-8 bg-zinc-500 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-zinc-400 hover:drop-shadow-2xl hover:animate-bounce duration-300"
                >
                    +
                </a>
            </div>
        </>
    );
};

export default SlaveTable;
