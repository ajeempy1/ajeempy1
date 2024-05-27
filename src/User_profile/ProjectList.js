import React from 'react';

const ProjectList = ({ projects }) => {
    return (
        <div className="form-div">
            <h2>Project List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, index) => (
                        <tr key={index}>
                            <td>{project.name}</td>
                            <td>{project.description}</td>
                            <td><a href={`/user_profile/update_project/${project.id}`}>Update</a></td>
                            <td><a href={`/user_profile/delete_project/${project.id}`}>Delete</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectList;
