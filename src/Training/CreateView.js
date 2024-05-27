import React from 'react';
import Header from '../components/Header'; // Corrected import path
import Footer from '../components/Footer'; // Corrected import path
import worthyLogo from '../static/images/worthy-logo.png';
import '../static/css/style.css';

const CreateView = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here, such as validation and other actions
        // No API call in this example
        console.log('Form submitted');
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <div className="flex-grow-1 d-flex justify-content-center align-items-center">
                <div className="centered-container">
                    <form onSubmit={handleSubmit} action="." method="POST" encType="multipart/form-data">
                <h4>Registration Form</h4>
                {/* Assuming csrf_token is handled elsewhere */}
                <input type="hidden" name="csrfmiddlewaretoken" value="{{ csrf_token }}" />
                {/* Replace {{ form.as_p }} with individual form fields */}
                <input type="text" name="fullname" placeholder="Full Name" /><br />
                <input type="text" name="nickname" placeholder="Nickname" /><br />
                <input type="email" name="email" placeholder="Email" /><br />
                <input type="text" name="mobile_no" placeholder="Mobile No" /><br />
                <select name="category">
                    <option value="Python for Beginners Training">Python for Beginners Training</option>
                    <option value="Python and Django Training">Python and Django Training</option>
                    <option value="AWS Solution Architect">AWS Solution Architect</option>
                </select><br />
                <input type="submit" value="Submit" /><br />
                <a href="{% url 'training:index' %}" className="back-to-index">Back</a>
            </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CreateView;