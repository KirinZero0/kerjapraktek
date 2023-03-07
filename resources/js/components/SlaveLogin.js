import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


function SlaveLogin() {
    const [codename, setCodename] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/auth/slaves/login', { codename, password })
        .then((response) => {
        // Handle successful login
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
    </form>
    );
}

export default SlaveLogin;

if (document.getElementById('slave')) {
    ReactDOM.render(<SlaveLogin />, document.getElementById('slave'));
}