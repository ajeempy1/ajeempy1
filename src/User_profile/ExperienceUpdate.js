import React, { useState } from 'react';

const ExperienceUpdate = ({ experience }) => {
    const [formData, setFormData] = useState({
        title: experience.title,
        company: experience.company,
        start_date: experience.start_date,
        end_date: experience.end_date,
        description: experience.description
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your logic here to handle form submission (e.g., validation)
        console.log(formData); // Log the form data for now
    }

    return (
        <div className="form-div">
            <h2>Update Experience</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                />
                <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company"
                />
                <input
                    type="date"
                    name="start_date"
                    value={formData.start_date}
                    onChange={handleChange}
                />
                <input
                    type="date"
                    name="end_date"
                    value={formData.end_date}
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default ExperienceUpdate;
