import React from 'react';

function Logout() {
    function handleLogout () {
        localStorage.removeItem('token');
        window.location.href = '/Account/Login';
    }
    return (
        <div>
            <h2>Logout</h2>
            <p>Are you sure you want to logout?</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
export default Logout;