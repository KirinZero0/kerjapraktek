const NavBuyer = () => {
    return (
        <div className="navbar bg-gray-800">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                </div>
                <a href="#" className="btn btn-ghost normal-case text-xl">
                    <img
                        className="w-8 h-8 mr-2"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                        alt="logo"
                    />
                    BlackSlaver
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a href="/StoreBuyer">Store</a>
                    </li>
                    <li>
                        <a href="/">Transactions</a>
                    </li>
                    <li>
                        <a href="/Contacts">Profile</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn" href="/LoginBuyer">
                    Logout
                </a>
            </div>
        </div>
    );
};
export default NavBuyer;
