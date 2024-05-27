import React from 'react';

const ProjectDelete = () => {
    const handleDelete = () => {
        // Handle delete functionality here
    };

    return (
        <div className="main">
            <form method="POST" onSubmit={handleDelete}>
                <input type="hidden" name="csrfmiddlewaretoken" value="{% csrf_token %}" />
                Are you sure you want to delete this item?<br />
                <input type="submit" value="Yes" />
                <a href="/">Cancel</a>
            </form>
        </div>
    );
};

export default ProjectDelete;
