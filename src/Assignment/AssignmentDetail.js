import React from 'react';

const AssignmentDetail = ({ assignment, form }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        // You can call a function to handle form submission or dispatch an action if using Redux
    };

    return (
        <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
            {/* CSRF token */}
            <input type="hidden" name="csrfmiddlewaretoken" value="{% csrf_token %}" />

            <p>Student: {assignment.student}</p>
            <p>Description: {assignment.description}</p>
            <p>File: <a href={assignment.file.url} target="_blank">{assignment.file.name}</a></p>

            {/* Update score form */}
            <div>
                {form.as_p}
                <button type="submit" className="btn btn-secondary" style={{ backgroundColor: 'gold', color: 'white' }}>Update Score</button>
                <a href="{% url 'assignment:assessment_list' %}" className="btn btn-primary" style={{ backgroundColor: 'gold', color: '#000' }}>Back to Assessment List</a>
            </div>
        </form>
    );
};

export default AssignmentDetail;
