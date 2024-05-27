import React from 'react';

const CoursePlanDetail = ({ coursePlan }) => {
    return (
        <div>
            <h1>{coursePlan.plan_name} - Course Plan Details</h1>
            <p><strong>Plan Name:</strong> {coursePlan.plan_name}</p>
            <p><strong>Plan Description:</strong> {coursePlan.plan_description}</p>
            <p><strong>Course Fee:</strong> ${coursePlan.course_fee}</p>
            <p><strong>Duration:</strong> {coursePlan.duration} weeks</p>
            <a href="{% url 'sme:course_plan_list' %}">Back to Course Plans List</a>
        </div>
    );
};

export default CoursePlanDetail;
