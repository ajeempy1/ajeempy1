import React from 'react';

const AddStudent = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        // You can call a function to handle form submission or dispatch an action if using Redux
    };

    return (
        <div className="form-container">
            <form method="post" onSubmit={handleSubmit}>
                <h1>Add Student</h1>
                {/* CSRF token */}
                <input type="hidden" name="csrfmiddlewaretoken" value="{% csrf_token %}" />

                {/* Display form fields */}
                <label>Name:</label>
                <input type="text" name="name" />

                {/* Submit button */}
                <button type="submit" style={{ backgroundColor: 'gold' }}>Save</button>
            </form>
        </div>
    );
};

export default AddStudent;
