import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


function BuyerLogin() {
    const [codename, setCodename] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [token, setToken] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/auth/buyers/login', { codename, password })
        .then((response) => {
            const token = response.data.data.token;
            setToken(token);
        })
        .catch((error) => {
            setError('Your credentials are incorrect.');
        });
    };

    return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>
            Codename:
                <input type="text" value={codename} onChange={(e) => setCodename(e.target.value)} />
            </label>
        </div>

        <div>
            <label>
            Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
        </div>

        <div>
            <button type="submit">Login</button>
        </div>

        {error && <p>{error}</p>}
        {token && <p>Your token is: {token}</p>}
    </form>
    );
}

export default BuyerLogin;
