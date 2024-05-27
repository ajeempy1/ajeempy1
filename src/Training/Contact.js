import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        contact_no: '',
        query: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can handle the form submission directly in your Django view
        // Just set the action attribute of the form to your Django view URL
        // Example: <form onSubmit={handleSubmit} action="/your-django-view-url/" method="post">
        // Don't forget to include {% csrf_token %} in your Django form to prevent CSRF attacks
        // After the form is submitted, your Django view will handle the request
        // You can access the form data in your Django view using request.POST
        // You can also redirect the user or return a response based on the result of form submission
    }

    return (
        <div className="form-div">
            <form onSubmit={handleSubmit}>
                <h2>Contact Us</h2>
                <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="text"
                    name="contact_no"
                    value={formData.contact_no}
                    onChange={handleChange}
                    placeholder="Contact Number"
                />
                <textarea
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    placeholder="Your Query"
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
