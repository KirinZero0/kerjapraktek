const IsBuyer = () => {
    return sessionStorage.getItem("guard") === "buyer";
};

const IsSlaver = () => {
    return sessionStorage.getItem("guard") === "slaver";
};

export default { IsBuyer, IsSlaver };
