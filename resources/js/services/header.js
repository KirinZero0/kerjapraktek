const Header = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
        return { Authorization: `Bearer ${token}` };
    } else {
        return {};
    }
};

export default Header;
