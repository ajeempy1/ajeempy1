import React from 'react';

const ResumeDetail = ({ resume }) => {
    return (
        <div>
            <h1>Resume Detail</h1>
            <h2>{resume.personal_info.first_name} {resume.personal_info.last_name}</h2>
            <p>Email: {resume.personal_info.email}</p>
            <p>Phone: {resume.personal_info.phone}</p>

            <h2>Education</h2>
            <ul>
                {resume.education.map((education, index) => (
                    <li key={index}>{education.degree} - {education.institution} ({new Date(education.graduation_date).getFullYear()})</li>
                ))}
                {resume.education.length === 0 && <li>No education information available.</li>}
            </ul>

            <h2>Experience</h2>
            <ul>
                {resume.experience.map((experience, index) => (
                    <li key={index}>
                        {experience.title} at {experience.company} ({new Date(experience.start_date).getFullYear()} - {new Date(experience.end_date).getFullYear()})
                        <p>{experience.description}</p>
                    </li>
                ))}
                {resume.experience.length === 0 && <li>No experience information available.</li>}
            </ul>

            <h2>Skills</h2>
            <ul>
                {resume.skills.map((skill, index) => (
                    <li key={index}>{skill.name} ({skill.level})</li>
                ))}
                {resume.skills.length === 0 && <li>No skill information available.</li>}
            </ul>

            <h2>Projects</h2>
            <ul>
                {resume.projects.map((project, index) => (
                    <li key={index}>{project.name}<p>{project.description}</p></li>
                ))}
                {resume.projects.length === 0 && <li>No project information available.</li>}
            </ul>
        </div>
    );
};

export default ResumeDetail;
