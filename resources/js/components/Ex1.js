import { useNavigate } from "react-router-dom";

const Ex1 = () => {
    const navigate = useNavigate()
    return (
        <>
        <h3>
            Welcome to the home page!
        </h3>
        <div>
            <button onClick={() => navigate('/About')}>To About Page</button>
        </div>
        <div>
            <button onClick={() => navigate('/Login')}>Login Here!</button>
        </div>
        </>
    )

}

export default Ex1;