import React from 'react';
import Header from '../components/Header'; // Corrected import path
import Footer from '../components/Footer'; // Corrected import path
import worthyLogo from '../static/images/worthy-logo.png';
import '../static/css/sme_edit_sidebar.css';
import '../static/css/style.css';

const MentorshipForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        // You can use fetch or axios to send data to your backend API
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
                        <a href="#">Assignments <i class="fa fa-chevron-down"></i></a>
                        <ul>
                          <li><a href="/Assignment/AssignmentList">Assignment List</a></li>
                          <li><a href="/Assignment/UploadAssignment">Upload Assignment</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Student Interview Details <i class="fa fa-chevron-down"></i></a>
                                    <ul>
                                        <li><a href="{% url 'sme:create_mentorship' %}" >Create Mentorship</a></li>
                                        <li><a href="{% url 'sme:mentorship_list' %}" >Mentorship list</a></li>
                                    </ul>
                      </li>
                     <li><a href="#">Input Recorded Video<i class="fa fa-chevron-down"></i></a>
                                    <ul>
                                        <li><a href="{% url 'video_uploads:python_list' %}">Python</a></li>
                                        <li><a href="{% url 'video_uploads:django_list' %}">Django</a></li>
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
            <h2>Mentorship Form</h2>
            <label>SME Name :</label>
            <input type="text" name="sme_name" placeholder="SME Name" />
            <label>Company Name :</label>
            <input type="text" name="company_name" placeholder="Company Name" />
            <label>Interview Status :</label>
            <textarea name="interview_status" placeholder="Interview Status"></textarea>
            <label>Remark :</label>
            <textarea name="remark" placeholder="Remark"></textarea>
            <br />
                <div>
                    <a href="/Account/StudentEdit">Back</a>
                    <input type="submit" value="submit" />
                </div>
                <br />
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

export default MentorshipForm;
