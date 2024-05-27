import React from 'react';

const DeleteView = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle deletion logic here, such as sending a DELETE request
        // No API call in this example, just log a message to the console
        console.log('Item deleted');
    };

    return (
        <div className="main">
            <form onSubmit={handleSubmit} method="POST">
                {/* Assuming csrf_token is handled elsewhere */}
                <input type="hidden" name="csrfmiddlewaretoken" value="{{ csrf_token }}" />
                Are you sure you want to delete this item?
                <input type="submit" value="yes" />
                <a href="/" className="cancel">cancel</a>
            </form>
        </div>
    );
};

export default DeleteView;
