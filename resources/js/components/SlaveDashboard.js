import React from 'react';
import ReactDOM from 'react-dom';

function SlaveDashboard() {
    return (
    <div>
        <h1>Slave Dashboard</h1>
        <p>Welcome to your dashboard!</p>
    </div>
    );
}

export default SlaveDashboard;
if (document.getElementById('dashboard')) {
    ReactDOM.render(<SlaveDashboard />, document.getElementById('dashboard'));
}