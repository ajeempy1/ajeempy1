import React, { useState } from 'react';

const AboutPage = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        profileOverview: '',
        achievements: '',
        skills: '',
        photo: null
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData({ ...formData, photo: file });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            formDataToSend.append(key, formData[key]);
        });
        // Perform API request to save the form data
        fetch('/api/about', {
            method: 'POST',
            body: formDataToSend
        })
        .then(response => {
            // Handle response
        })
        .catch(error => {
            // Handle error
        });
    };

    return (
        <div>
            <h1>About Page</h1>
            <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
                {/* CSRF token */}
                <input type="hidden" name="csrfmiddlewaretoken" value="{% csrf_token %}" />

                {/* Form fields */}
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea id="content" name="content" value={formData.content} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="profileOverview">Profile Overview:</label>
                    <textarea id="profileOverview" name="profileOverview" value={formData.profileOverview} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="photo">Photo:</label>
                    <input type="file" id="photo" name="photo" onChange={handleFileChange} />
                </div>
                <div>
                    <label htmlFor="achievements">Achievements:</label>
                    <textarea id="achievements" name="achievements" value={formData.achievements} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="skills">Skills:</label>
                    <textarea id="skills" name="skills" value={formData.skills} onChange={handleInputChange} />
                </div>

                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default AboutPage;
