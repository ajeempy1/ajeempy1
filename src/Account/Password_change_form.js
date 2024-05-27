import React, { useState } from 'react';
import Header from '../components/Header'; // Corrected import path
import Footer from '../components/Footer'; // Corrected import path
import worthyLogo from '../static/images/worthy-logo.png';
import '../static/css/sme_edit_sidebar.css';
import '../static/css/style.css';
import { Helmet } from 'react-helmet';

const Password_change_form = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword1, setNewPassword1] = useState('');
  const [newPassword2, setNewPassword2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can validate passwords and make an API call to update the password
    if (newPassword1 !== newPassword2) {
      alert("New passwords do not match!");
      return;
    }
    console.log("Form submitted:", { oldPassword, newPassword1, newPassword2 });
    // Clear input fields after submission if needed
    setOldPassword('');
    setNewPassword1('');
    setNewPassword2('');
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
                      <form onSubmit={handleSubmit}>
					  <h2>Change your password</h2>
        <p>
          <label htmlFor="old_password">Old Password:</label>
          <input
            type="password"
            id="old_password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="new_password1">New Password:</label>
          <input
            type="password"
            id="new_password1"
            value={newPassword1}
            onChange={(e) => setNewPassword1(e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="new_password2">Confirm New Password:</label>
          <input
            type="password"
            id="new_password2"
            value={newPassword2}
            onChange={(e) => setNewPassword2(e.target.value)}
            required
          />
        </p>


        <p><a href="/Account/SmeEdit">Back</a> <input type="submit" value="Change Password" />

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

export default Password_change_form;
