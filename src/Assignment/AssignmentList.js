import React from 'react';
import Header from '../components/Header'; // Corrected import path
import Footer from '../components/Footer'; // Corrected import path
import worthyLogo from '../static/images/worthy-logo.png';
import '../static/css/sme_edit_sidebar.css';
import '../static/css/style.css';

const AssignmentList = ({ assignments = [] }) => {
    return (
        <div>
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

            <h2>Assignment List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Student</th>
                        <th>Description</th>
                        <th>File</th>
                        <th>Marks Obtained</th>
                        <th>Total Marks</th>
                        <th>Submission Date</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {assignments.length > 0 ? (
                        assignments.map(assignment => (
                            <tr key={assignment.id}>
                                <td>{assignment.student.name}</td>
                                <td>{assignment.description}</td>
                                <td>
                                    <a href={assignment.file} download>Download</a>
                                </td>
                                <td>{assignment.marks_obtained}</td>
                                <td>{assignment.total_marks}</td>
                                <td>{new Date(assignment.submission_date).toLocaleString()}</td>
                                <td>{assignment.grade}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">No assignments available.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div style={{ backgroundColor: "#fc9803", color: "black", width: '50px' }}>
                <p>
                    <a href="/Account/StudentEdit" style={{ textDecoration: 'none', color: "black" }}>
                        Back
                    </a>
                </p>
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
        </div>
    );
};

export default AssignmentList;
