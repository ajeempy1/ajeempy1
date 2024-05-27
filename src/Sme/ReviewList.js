import React from 'react';
import Header from '../components/Header'; // Corrected import path
import Footer from '../components/Footer'; // Corrected import path
import worthyLogo from '../static/images/worthy-logo.png';
import '../static/css/sme_edit_sidebar.css';
import '../static/css/style.css'; // Ensure your style sheet is included
import { Helmet } from 'react-helmet';
import '../static/css/review_list.css';

const ReviewList = ({ reviews = [] }) => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header id="header" />

            <div className="container-fluid flex-grow-1">
                <Helmet></Helmet>
                <div className="wrapping">
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
                                                <li><a href="{% url 'assignment:assessment_list' %}">Assessment List</a></li>
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
                                        <h2>Review List</h2>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Rating</th>
                                                    <th>Reviewer Name</th>
                                                    <th>Reviewer Content</th>
                                                    <th>Reviewer Course Attend</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {reviews.length > 0 ? (
                                                    reviews.map((review, index) => (
                                                        <tr key={index}>
                                                            <td>{review.rating}</td>
                                                            <td>{review.reviewer_name}</td>
                                                            <td>{review.review_content}</td>
                                                            <td>{review.review_course_attended}</td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="4">No reviews available</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                        <br />
                                        <div className="back-button-container">
                                            <p>
                                                <a href="/Account/SmeEdit">Back</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               <Footer id="footer" className="footer" />
            </div>
        </div>
    );
};

export default ReviewList;
