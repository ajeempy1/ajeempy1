import React, { useState } from 'react';

const CreateResume = () => {
    const [formData, setFormData] = useState({
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
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log(formData);
    }

    return (
        <div>
            <h1>Create a New Resume</h1>
            <form onSubmit={handleSubmit}>
                <h2>Personal Information</h2>
                <label htmlFor="personal_info_id">Personal Info ID:</label>
                <input type="text" id="personal_info_id" name="personal_info_id" onChange={handleChange} value={formData.personal_info_id} required/><br />

                <h2>Personal Information (Optional)</h2>
                <label htmlFor="first_name">First Name:</label>
                <input type="text" id="first_name" name="first_name" onChange={handleChange} value={formData.first_name} /><br />

                <label htmlFor="last_name">Last Name:</label>
                <input type="text" id="last_name" name="last_name" onChange={handleChange} value={formData.last_name} /><br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={handleChange} value={formData.email} /><br />

                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" name="phone" onChange={handleChange} value={formData.phone} /><br />

                <h2>Education</h2>
                <label htmlFor="degree">Degree:</label>
                <input type="text" id="degree" name="degree" onChange={handleChange} value={formData.degree} required/><br />

                <h2>Experience</h2>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" onChange={handleChange} value={formData.title} required/><br />

                <h2>Skills</h2>
                <label htmlFor="skill_name">Skill Name:</label>
                <input type="text" id="skill_name" name="skill_name" onChange={handleChange} value={formData.skill_name} required/><br />

                <h2>Projects</h2>
                <label htmlFor="project_name">Project Name:</label>
                <input type="text" id="project_name" name="project_name" onChange={handleChange} value={formData.project_name} required/><br />

                <label htmlFor="project_description">Project Description:</label>
                <textarea id="project_description" name="project_description" rows="4" onChange={handleChange} value={formData.project_description} required></textarea><br />

                <button type="submit">Create Resume</button>
            </form>
        </div>
    );
};

export default CreateResume;
