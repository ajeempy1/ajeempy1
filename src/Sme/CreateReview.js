import React, { useState } from 'react';

const CreateReview = () => {
    const [formData, setFormData] = useState({
        sme_name: '',
        rating: '',
        reviewer_name: '',
        review_content: '',
        review_course_attended: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData); // Example: Send formData to backend API
    };

    return (
        <div className="form-div">
            <h2>Create Review</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="sme_name" placeholder="SME Name" onChange={handleChange} />
                <input type="number" name="rating" placeholder="Rating" onChange={handleChange} />
                <input type="text" name="reviewer_name" placeholder="Reviewer Name" onChange={handleChange} />
                <textarea name="review_content" placeholder="Review Content" onChange={handleChange}></textarea>
                <select name="review_course_attended" onChange={handleChange}>
                    <option value="">Select Course</option>
                    <option value="1">Python for Beginners Training</option>
                    <option value="2">Python and Django Training</option>
                    <option value="3">AWS Solution Architect</option>
                    <option value="4">Rubby On Rails</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateReview;
