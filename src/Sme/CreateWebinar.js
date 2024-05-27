import React, { useState } from 'react';

const CreateWebinar = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        duration: '',
        date: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle the form submission, but since the API endpoint is removed, this part won't send any data anywhere.
        // This function would typically be used to send form data to your server using fetch or Axios.
        console.log('Form data submitted:', formData);
    }

    return (
        <div className="form-div">
            <form onSubmit={handleSubmit}>
                <h2>Create Webinar</h2>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                />
                <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                >
                    <option value="">Select Duration</option>
                    <option value="15min">15 Minutes</option>
                    <option value="30min">30 Minutes</option>
                    <option value="45min">45 Minutes</option>
                    <option value="1hr">1 Hour</option>
                </select>
                <input
                    type="datetime-local"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                />
                <button type="submit">Create</button>
                <a href="{% url 'account:edit' %}">Back</a>
            </form>
        </div>
    );
}

export default CreateWebinar;
