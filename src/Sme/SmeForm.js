import React, { useState } from 'react';

const SMEForm = () => {
    const [formData, setFormData] = useState({
        smeName: '',
        smeProfileSummary: '',
        skills: '',
        smeCoreSkills: '',
        smeExperience: '',
        user: '',
        resume: '', // If this is a file upload field, use type="file"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData); // You can send formData to backend API for processing
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Subject Matter Expert Form</h2>
            {/* Add CSRF token here if needed */}
            {/* { csrf_token } */}
            <div>
                <label htmlFor="smeName">SME Name:</label>
                <input type="text" id="smeName" name="smeName" value={formData.smeName} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="smeProfileSummary">SME Profile Summary:</label>
                <textarea id="smeProfileSummary" name="smeProfileSummary" value={formData.smeProfileSummary} onChange={handleChange}></textarea>
            </div>
            {/* Add other form fields similarly */}
            <button type="submit">Save</button>
        </form>
    );
};

export default SMEForm;
