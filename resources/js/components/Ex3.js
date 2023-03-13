import { getUser } from "../actions/user";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Ex3 = () => {
    const dispatch = useDispatch();
    const { currentLogin } = useSelector((state) => state.user);
    useEffect(() => {
        console.log("e");
        dispatch(getUser());
    }, []);

    return (
        <>
            <div>
                <h3>Currently Logged In As:</h3>
                {currentLogin ? (
                    <div>
                        <p>ID: {currentLogin.id}</p>
                        <p>Codename: {currentLogin.codename}</p>
                        <p>Name: {currentLogin.name}</p>
                    </div>
                ) : (
                    <p>No User Logged In</p>
                )}
            </div>
        </>
    );
};

export default Ex3;
