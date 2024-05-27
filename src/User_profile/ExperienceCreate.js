import React, { useState } from 'react';
import Header from '../components/Header'; // Corrected import path
import Footer from '../components/Footer'; // Corrected import path
import worthyLogo from '../static/images/worthy-logo.png';
import '../static/css/sme_edit_sidebar.css';
import '../static/css/style.css';

const ExperienceCreate = () => {
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        start_date: '',
        end_date: '',
        description: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log(formData); // Example: Log form data
    };

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
    <form onSubmit={handleSubmit}>
        <h2>Create Experience</h2>
        <label htmlFor="Title">Title :</label>
        <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
        />
        <label htmlFor="company">company :</label>
        <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
        />
        <label htmlFor="start_date">start_date :</label>
        <input
            type="date"
            name="start_date"
            value={formData.start_date}
            onChange={handleChange}
        />
        <label htmlFor="end_date">end_date :</label>
        <input
            type="date"
            name="end_date"
            value={formData.end_date}
            onChange={handleChange}
        />
        <label htmlFor="description">Description :</label>
        <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
        />
        <div>
            <a href="/Account/SmeEdit">Back</a>
            <input type="submit" value="Create" />
        </div>
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

export default ExperienceCreate;
