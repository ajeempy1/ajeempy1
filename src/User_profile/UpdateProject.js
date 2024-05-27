import React, { useState } from 'react';

const UpdateProject = ({ project }) => {
    const [formData, setFormData] = useState({
        name: project.name,
        description: project.description
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log(formData); // Log the form data for now
    };

    return (
        <div className="form-div">
            <h2>Update Project</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} /><br />

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" rows="4" value={formData.description} onChange={handleChange}></textarea><br />

                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateProject;
