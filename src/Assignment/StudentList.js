import React from 'react';

const StudentList = ({ students }) => {
    return (
        <div>
            <h1>Student List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        {/* Add more columns if needed */}
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            {/* Add more columns if needed */}
                        </tr>
                    ))}
                    {students.length === 0 && (
                        <tr>
                            <td colSpan="2">No students available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
