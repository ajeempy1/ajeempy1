import React, { useState } from 'react';

const ResumeUpdate = ({ resume }) => {
    const [formData, setFormData] = useState({
        name: resume.name,
        personal_info_id: '',
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        degree: '',
        title: '',
        skill_name: '',
        project_name: '',
        project_description: ''
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
            <h2>Update Resume</h2>
            <form onSubmit={handleSubmit}>
                <h2>Personal Information</h2>
                <label htmlFor="personal_info_id">Personal Info ID:</label>
                <input type="text" id="personal_info_id" name="personal_info_id" required value={formData.personal_info_id} onChange={handleChange} /><br />

                <h2>Personal Information (Optional)</h2>
                <label htmlFor="first_name">First Name:</label>
                <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} /><br />

                <label htmlFor="last_name">Last Name:</label>
                <input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} /><br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /><br />

                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} /><br />

                <h2>Education</h2>
                <label htmlFor="degree">Degree:</label>
                <input type="text" id="degree" name="degree" required value={formData.degree} onChange={handleChange} /><br />

                <h2>Experience</h2>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" required value={formData.title} onChange={handleChange} /><br />

                <h2>Skills</h2>
                <label htmlFor="skill_name">Skill Name:</label>
                <input type="text" id="skill_name" name="skill_name" required value={formData.skill_name} onChange={handleChange} /><br />

                <h2>Projects</h2>
                <label htmlFor="project_name">Project Name:</label>
                <input type="text" id="project_name" name="project_name" required value={formData.project_name} onChange={handleChange} /><br />

                <label htmlFor="project_description">Project Description:</label>
                <textarea id="project_description" name="project_description" rows="4" required value={formData.project_description} onChange={handleChange}></textarea><br />

                <button type="submit">Update Resume</button>
            </form>
        </div>
    );
};

export default ResumeUpdate;
