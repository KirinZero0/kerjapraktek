import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUserCart } from "../../../../actions/buyer/cart/showusercart";
import { ewalletTransaction } from "../../../../actions/buyer/transaction/ewallettransaction";
import { vaTransaction } from "../../../../actions/buyer/transaction/vatransaction";
import { retailTransaction } from "../../../../actions/buyer/transaction/retailtransaction";

function UserCart() {
    const [cart, setCart] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [ewalletOption, setEWalletOption] = useState("");
    const [vaOption, setVAOption] = useState("");
    const [retailOption, setRetailOption] = useState("");
    const dispatch = useDispatch();

    // console.log("aa");

    const { data } = useSelector((state) => state.showusercart);
    useEffect(() => {
        dispatch(showUserCart());
    }, []);
    useEffect(() => {
        setCart(data);
        console.log(data);
    }, [data]);

    const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const shipping = 4;
    const total = subtotal + shipping;

    //Handling Payment Option State
    const handleEWalletChange = (event) => {
        setEWalletOption(event.target.value);
    };
    const handleVAChange = (event) => {
        setVAOption(event.target.value);
    };
    const handleRetailChange = (event) => {
        setRetailOption(event.target.value);
    };

    // Handing Modal
    const handleCheckout = () => {
        setShowModal(true);
    };

    const handleHideModal = () => {
        setShowModal(false);
    };

    // Handling Transaction
    const handleEWallet = (channel_code) => {
        dispatch(ewalletTransaction(channel_code))
            .then(() => {
                console.log("ewallet transaction in progress");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleVA = (bank_code) => {
        dispatch(vaTransaction(bank_code))
            .then(() => {
                console.log("VA transaction in progress");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleRetail = (retail_name) => {
        dispatch(retailTransaction(retail_name))
            .then(() => {
                console.log("Retail transaction in progress");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="h-screen bg-base-100 pt-20">
            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                <div className="rounded-lg md:w-2/3">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                        >
                            <img
                                src={item.product_image}
                                alt="Avatar Tailwind CSS Component"
                                className="w-full rounded-lg sm:w-40"
                            />
                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                    <h2 className="text-lg font-bold text-gray-900">
                                        {item.name}
                                    </h2>
                                    <p className="mt-1 text-xs text-gray-700">
                                        {item.race}
                                    </p>
                                </div>
                                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                    <div className="flex items-center border-gray-100">
                                        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                                            {" "}
                                            -{" "}
                                        </span>
                                        <input
                                            className="h-8 w-8 border bg-white text-center text-xs outline-none"
                                            type="number"
                                            value={item.quantity}
                                        />
                                        <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                                            {" "}
                                            +{" "}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <p className="text-sm">${item.total}</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Subtotal</p>
                        <p className="text-gray-700">${subtotal}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-700">Shipping</p>
                        <p className="text-gray-700">${shipping}</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Total</p>
                        <div className="">
                            <p className="mb-1 text-lg font-bold">${total}</p>
                            <p className="text-sm text-gray-700">
                                including VAT
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleCheckout}
                        className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
                    >
                        Check out
                    </button>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-10">
                    <div className="bg-gray-700 w-3/5 rounded p-6 drop-shadow-xl">
                        <div className="flex justify-between">
                            <h1 className="text-lg font-bold">
                                Select a payment method:
                            </h1>
                            <button
                                className="btn btn-square"
                                onClick={handleHideModal}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="collapse">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium">
                                <h2>EWallet</h2>
                            </div>
                            <div className="collapse-content">
                                <div className="space-y-2">
                                    {/* E-wallet form */}
                                    <div className="flex flex-col space-y-2">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                className="radio "
                                                value="ID_DANA"
                                                checked={
                                                    ewalletOption === "ID_DANA"
                                                }
                                                onChange={handleEWalletChange}
                                            />
                                            <span className="ml-2">DANA</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                className="radio"
                                                value="ID_OVO"
                                                checked={
                                                    ewalletOption === "ID_OVO"
                                                }
                                                onChange={handleEWalletChange}
                                            />
                                            <span className="ml-2">OVO</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                className="radio"
                                                value="ID_SHOPEEPAY"
                                                checked={
                                                    ewalletOption ===
                                                    "ID_SHOPEEPAY"
                                                }
                                                onChange={handleEWalletChange}
                                            />
                                            <span className="ml-2">
                                                SHOPEEPAY
                                            </span>
                                        </label>
                                        <div className="flex justify-end mt-4">
                                            <button 
                                                className="btn"
                                                onClick={() =>
                                                    handleEWallet(ewalletOption)
                                                }
                                            >
                                                Confirm
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="collapse">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium">
                                <h2>Virtual Account</h2>
                            </div>
                            <div className="collapse-content">
                                <div className="space-y-2">
                                    <div className="flex flex-col space-y-2">
                                        {/* E-wallet form */}
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                className="radio"
                                                value="BCA"
                                                checked={vaOption === "BCA"}
                                                onChange={handleVAChange}
                                            />
                                            <span className="ml-2">BCA</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                className="radio "
                                                value="BNI"
                                                checked={vaOption === "BNI"}
                                                onChange={handleVAChange}
                                            />
                                            <span className="ml-2">BNI</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                className="radio "
                                                value="BRI"
                                                checked={vaOption === "BRI"}
                                                onChange={handleVAChange}
                                            />
                                            <span className="ml-2">BRI</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                className="radio "
                                                value="MANDIRI"
                                                checked={vaOption === "MANDIRI"}
                                                onChange={handleVAChange}
                                            />
                                            <span className="ml-2">
                                                MANDIRI
                                            </span>
                                        </label>
                                        <div className="flex justify-end mt-4">
                                            <button 
                                                className="btn"
                                                onClick={() =>
                                                    handleVA(vaOption)
                                                }
                                            >
                                                Confirm
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="collapse">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium">
                                <h2>Retail Outlets</h2>
                            </div>
                            <div className="collapse-content">
                                <div className="space-y-2">
                                    {/* E-wallet form */}
                                    <div className="flex flex-col space-y-22">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                className="radio"
                                                value="ALFAMART"
                                                checked={
                                                    retailOption === "ALFAMART"
                                                }
                                                onChange={handleRetailChange}
                                            />
                                            <span className="ml-2">
                                                ALFAMART
                                            </span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                className="radio"
                                                value="INDOMARET"
                                                checked={
                                                    retailOption === "INDOMARET"
                                                }
                                                onChange={handleRetailChange}
                                            />
                                            <span className="ml-2">
                                                INDOMARET
                                            </span>
                                        </label>
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <button 
                                            className="btn"
                                            onClick={() =>
                                                handleRetail(retailOption)
                                            }
                                        >
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserCart;
