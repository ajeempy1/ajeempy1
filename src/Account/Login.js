import React, { useState } from 'react';
import Header from '../components/Header'; // Corrected import path
import Footer from '../components/Footer'; // Corrected import path
import '../static/css/login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can call a function here to handle the login process
    // For demonstration purposes, let's just log the username and password
    console.log('Username:', username);
    console.log('Password:', password);
    alert('Login successful!'); // Simulate a successful login
    window.location.href = '/';
    // Redirect the user to the dashboard or desired page after login
    // window.location.href = '/dashboard';
  };

  return (

  <div className="d-flex flex-column min-vh-100">
          <Header id="header" />
          <div className="second-form">

                  <form onSubmit={handleSubmit}>
                  <h2>Login</h2>
                    <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' required />
                    <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
                    <div className="form-action">
                        <a href="/Account/register">Back</a>
                        <input type='submit' value='Login' />
                    </div>
                  </form>

          </div>
      <Footer id="footer" />
  </div>
  );
}

export default Login;
