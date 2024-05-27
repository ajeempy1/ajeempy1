import React from 'react';
import Header from '../components/Header'; // Corrected import path
import Footer from '../components/Footer'; // Corrected import path
import worthyLogo from '../static/images/worthy-logo.png';
import '../static/css/sme_edit_sidebar.css';
import '../static/css/style.css';

const PythonList = ({ pythonFiles = [] }) => {
    return (
        <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="container-fluid">

        <div className="wrapping">
          <div className="container-fluid">
            <div className="container-fluid">
              <div className="row">
                <div className="side-menu">
                  <div class="contenedor-menu">
                    <ul class="menu">
                      <li>
                        <a href="#">Update User Detail <i class="fa fa-chevron-down"></i></a>
                        <ul>
                          <li><a href="/Account/Password_change_form">Update password</a></li>
                          <li><a href="{% url 'account:update_email' %}">Update Email</a></li>
                        </ul>
                      </li>
                      <li><a href="{% url 'sme:review_list' %}">Review</a></li>
                      <li><a href="#">Resume<i class="fa fa-chevron-down"></i></a>
                        <ul>
                          <li><a href="{% url 'user_profile:resume_upload' %}">Upload Resume</a></li>
                          <li><a href="{% url 'user_profile:resume_list' %}">Resume list</a></li>
                        </ul>
                      </li>
                      <li><a href="{% url 'user_profile:create_project' %}">Project </a></li>
                      <li><a href="#">Webinar</a></li>
                      <li><a href="#">Work Experience<i class="fa fa-chevron-down"></i></a>
                        <ul>
                          <li><a href="{% url 'user_profile:experience_create' %}">Create Experience</a></li>
                          <li><a href="{% url 'user_profile:experience_list' %}">list</a></li>
                        </ul>
                      </li>
                      <li><a href="{% url 'user_profile:create_skill' %}">Skills</a></li>
                      <li><a href="#">Create Course<i class="fa fa-chevron-down"></i></a>
                        <ul>
                          <li><a href="{% url 'sme:create_course.sme' %}">Create Course</a></li>
                          <li><a href="{% url 'sme:courses_sme_list' %}">List</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Assessment <i class="fa fa-chevron-down"></i></a>
                        <ul>
                          <li><a href="{% url 'assignment:assessment_list' %}" >Assessment List</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Video Uploaded<i class="fa fa-chevron-down"></i></a>
                        <ul>
                          <li><a href="{% url 'video_uploads:upload_file' %}">Recorded Video Upload</a></li>
                          <li><a href="#">List/Display<i class="fa fa-chevron-down"></i></a></li>
                          <li><a href="{% url 'video_uploads:python_list' %}">Python</a></li>
                          <li><a href="{% url 'video_uploads:django_list' %}">Django</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Interview Remark Form<i class="fa fa-chevron-down"></i></a>
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
                      <div className="form-div">
            <h2>Python List</h2>
            <ol>
                {pythonFiles.length > 0 ? (
                    pythonFiles.map((file, index) => (
                        <li key={index}>
                            <p>{file.description}</p>
                            <div className="video-container">
                                <video controls preload="metadata" src={file.url} data-duration={file.duration}>
                                    Your browser does not support the video tag.
                                </video>
                                <div className="duration-overlay"></div>
                            </div>
                            <br />
                            <a href={file.url} download>Download</a>
                        </li>
                    ))
                ) : (
                    <li>No Python files available.</li>
                )}
            </ol>

        </div>

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

export default PythonList;

