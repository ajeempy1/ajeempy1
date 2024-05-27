import React from 'react';

const WebinarList = ({ webinars }) => {
    return (
        <div className="form-div">
            <h2>Webinar List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {webinars.map((webinar, index) => (
                        <tr key={index}>
                            <td>{webinar.name}</td>
                            <td>{webinar.description}</td>
                            <td>{webinar.duration}</td>
                            <td>{webinar.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default WebinarList;
