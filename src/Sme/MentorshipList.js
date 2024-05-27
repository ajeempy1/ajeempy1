import React from 'react';
import Header from '../components/Header'; // Corrected import path
import Footer from '../components/Footer'; // Corrected import path
import worthyLogo from '../static/images/worthy-logo.png';
import '../static/css/sme_edit_sidebar.css';
import '../static/css/style.css';

const MentorshipList = ({ mentorships = [] }) => {
const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    };

    const thTdStyle = {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
    };

    const thStyle = {
        ...thTdStyle,
        backgroundColor: '#4CAF50',
        color: 'white',
        fontWeight: 'bold',
    };

    const trEvenStyle = {
        backgroundColor: '#f2f2f2',
    };

    const trHoverStyle = {
        cursor: 'pointer',
    };

    const linkStyle = {
        color: '#007bff',
        textDecoration: 'none',
    };

    const linkHoverStyle = {
        textDecoration: 'underline',
    };

    const noMentorshipsStyle = {
        textAlign: 'center',
        color: '#999',
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

            <h2>Mentorship List</h2>
             <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>SME Name</th>
                        <th style={thStyle}>Company Name</th>
                        <th style={thStyle}>Interview Status</th>
                        <th style={thStyle}>Remark</th>
                    </tr>
                </thead>
                <tbody>
                    {mentorships.length > 0 ? (
                        mentorships.map((mentorship, index) => (
                            <tr key={index} style={index % 2 === 0 ? trEvenStyle : {}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ddd'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#f2f2f2' : ''}>
                                <td style={thTdStyle}>{mentorship.sme_name}</td>
                                <td style={thTdStyle}>{mentorship.company_name}</td>
                                <td style={thTdStyle}>{mentorship.interview_status}</td>
                                <td style={thTdStyle}>{mentorship.remark}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={noMentorshipsStyle}>No mentorships available.</td>
                        </tr>
                    )}
                </tbody>
            </table>
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

export default MentorshipList;
