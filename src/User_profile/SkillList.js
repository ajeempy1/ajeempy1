import React from 'react';

const SkillList = ({ skills }) => {
    return (
        <div className="form-div">
            <h2>Skill List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                    {skills.map((skill, index) => (
                        <tr key={index}>
                            <td>{skill.name}</td>
                            <td>{skill.level}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SkillList;
