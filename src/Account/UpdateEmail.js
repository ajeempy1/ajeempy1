import React, { useState, useEffect } from 'react';
import Header from '../components/Header'; // Corrected import path
import Footer from '../components/Footer'; // Corrected import path
import worthyLogo from '../static/images/worthy-logo.png';
import '../static/css/sme_edit_sidebar.css';
import '../static/css/style.css';
import { Helmet } from 'react-helmet';

const UpdateEmail = ({ emailForm = { new_email: {}, confirm_email: {} } }) => {
    const [formData, setFormData] = useState({
        new_email: emailForm.new_email.value || '',
        confirm_email: emailForm.confirm_email.value || ''
    });

    useEffect(() => {
        if (emailForm.new_email && emailForm.confirm_email) {
            setFormData({
                new_email: emailForm.new_email.value,
                confirm_email: emailForm.confirm_email.value
            });
        }
    }, [emailForm]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted with data:", formData); // Debugging log

        // Add your form submission logic here
        // For example, an API call to update the email
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <div className="container-fluid">
                <Helmet></Helmet>
                <div className="wrapping">
                    <div className="container-fluid">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="side-menu">
                                    <div className="contenedor-menu">
                                        <ul className="menu">
                                            <li>
                                                <a href="#">Update User Detail <i className="fa fa-chevron-down"></i></a>
                                                <ul>
                                                    <li><a href="/Account/Password_change_form">Update password</a></li>
                                                    <li><a href="{% url 'account:update_email' %}">Update Email</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="{% url 'sme:review_list' %}">Review</a></li>
                                            <li><a href="#">Resume<i className="fa fa-chevron-down"></i></a>
                                                <ul>
                                                    <li><a href="{% url 'user_profile:resume_upload' %}">Upload Resume</a></li>
                                                    <li><a href="{% url 'user_profile:resume_list' %}">Resume list</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="{% url 'user_profile:create_project' %}">Project </a></li>
                                            <li><a href="#">Webinar</a></li>
                                            <li><a href="#">Work Experience<i className="fa fa-chevron-down"></i></a>
                                                <ul>
                                                    <li><a href="{% url 'user_profile:experience_create' %}">Create Experience</a></li>
                                                    <li><a href="{% url 'user_profile:experience_list' %}">list</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="{% url 'user_profile:create_skill' %}">Skills</a></li>
                                            <li><a href="#">Create Course<i className="fa fa-chevron-down"></i></a>
                                                <ul>
                                                    <li><a href="{% url 'sme:create_course.sme' %}">Create Course</a></li>
                                                    <li><a href="{% url 'sme:courses_sme_list' %}">List</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Assessment <i className="fa fa-chevron-down"></i></a>
                                                <ul>
                                                    <li><a href="{% url 'assignment:assessment_list' %}" >Assessment List</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Video Uploaded<i className="fa fa-chevron-down"></i></a>
                                                <ul>
                                                    <li><a href="{% url 'video_uploads:upload_file' %}">Recorded Video Upload</a></li>
                                                    <li><a href="#">List/Display<i className="fa fa-chevron-down"></i></a></li>
                                                    <li><a href="{% url 'video_uploads:python_list' %}">Python</a></li>
                                                    <li><a href="{% url 'video_uploads:django_list' %}">Django</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Interview Remark Form<i className="fa fa-chevron-down"></i></a>
                                                <ul>
                                                    <li><a href="{% url 'sme:interview_remark_form' %}">Create interview remark form</a></li>
                                                    <li><a href="{% url 'sme:interview_remark_list' %}">interview remark List</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="middle">
                                    <div className="image-container">
                                        <img src={worthyLogo} alt="Uploaded" />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="form-container">
                                        <div className="form-div">
                                            <form onSubmit={handleSubmit}>
                                                <h2>Update Email</h2>
                                                {/* CSRF token */}
                                                <input type="hidden" name="csrfmiddlewaretoken" value="{% csrf_token %}" />

                                                {/* Display non-field errors */}
                                                {emailForm.non_field_errors && <div className="error">{emailForm.non_field_errors}</div>}

                                                <div>
                                                    {/* Display new email field */}
                                                    <label>{emailForm.new_email.label || 'New email:'}</label>
                                                    <input
                                                        type="email"
                                                        name="new_email"
                                                        value={formData.new_email}
                                                        onChange={handleChange}
                                                    />
                                                    {/* Display errors for new email */}
                                                    {emailForm.new_email.errors && <div className="error">{emailForm.new_email.errors}</div>}
                                                </div>
                                                <br />
                                                <div>
                                                    {/* Display confirm email field */}
                                                    <label>{emailForm.confirm_email.label || 'Confirm email:'}</label>
                                                    <input
                                                        type="email"
                                                        name="confirm_email"
                                                        value={formData.confirm_email}
                                                        onChange={handleChange}
                                                    />
                                                    {/* Display errors for confirm email */}
                                                    {emailForm.confirm_email.errors && <div className="error">{emailForm.confirm_email.errors}</div>}
                                                </div>
                                                <br />
                                                <p>
                                                    <a href="/Account/SmeEdit">Back</a>
                                                    <input type="submit" value="Update Email" />
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default UpdateEmail;
