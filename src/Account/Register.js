import React, { useState } from 'react';
import Header from '../components/Header'; // Corrected import path
import Footer from '../components/Footer'; // Corrected import path
import '../static/css/style.css';
import '../static/css/register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [profession, setProfession] = useState('STUDENT');
  const [productPurchasePlan, setProductPurchasePlan] = useState('free');
  const [amount, setAmount] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();
    // Validate password
    if (password !== password2) {
      alert("Passwords do not match!");
      return;
    }
    // You can call a function here to handle the registration process
    // For example, you can pass the username, password, and email to another function
    registerUser({ username, password, email, firstName, profession, productPurchasePlan, amount });
  };

  const registerUser = async (userData) => {
    try {
      // Here you can perform your fetch call or send the userData to a registration API
      // For demonstration purposes, let's just log the userData
      console.log(userData);
      alert('Registration successful!'); // Simulate a successful registration
      window.location.href = '/Account/Login'; // Redirect to login page after successful registration
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed. Please try again.'); // Simulate a failed registration
    }
  };

  return (
  <div className="d-flex flex-column min-vh-100">
          <Header id="header" />
    <div className="main-form">
      <form onSubmit={handleSubmit}>

     <div className="sec-form">
      <h2>Signup</h2>
        <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' required />
        <input type='text' name='first_name' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' required />
        <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
        <select name="profession" value={profession} onChange={(e) => setProfession(e.target.value)} required>
          <option value="STUDENT">Student</option>
          <option value="PROFESSIONAL">Professional</option>
          <option value="SUBJECT_MATTER_EXPERT">subject matter expert</option>
          <option value="Institute">Institute</option>
        </select>
        <select name="product_purchase_plan" value={productPurchasePlan} onChange={(e) => setProductPurchasePlan(e.target.value)} required>
          <option value="free">Free</option>
          <option value="premium">Premium</option>
          <option value="silver">Silver</option>
          <option value="gold">Gold</option>
        </select>
        <input type='number' name='amount' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Amount' required />
        <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
        <input type='password' name='password2' value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder='Repeat Password' required />
        <div className="form-actions">
            <a href="/">Back</a>
            <input type='submit' value='Pay' />
        </div>
        </div>
      </form>
 </div>
    <Footer id="footer" />
      </div>
  );
}

export default Register;
