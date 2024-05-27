import React, { useState } from 'react';
import Header from '../components/Header'; // Corrected import path
import Footer from '../components/Footer'; // Corrected import path
import worthyLogo from '../static/images/worthy-logo.png';
import '../static/css/sme_edit_sidebar.css';
import '../static/css/style.css';


const UploadAssignment = ({ onNewAssignment }) => {
    const [student, setStudent] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [marksObtained, setMarksObtained] = useState('');
    const [totalMarks, setTotalMarks] = useState(100);
    const [grade, setGrade] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const newAssignment = {
            id: Date.now(), // Using current timestamp as a unique id
            student: { name: student },
            description,
            file: URL.createObjectURL(file), // Create a local URL for the uploaded file
            marks_obtained: marksObtained,
            total_marks: totalMarks,
            submission_date: new Date().toISOString(),
            grade
        };

        onNewAssignment(newAssignment);

        // Clear the form
        setStudent('');
        setDescription('');
        setFile(null);
        setMarksObtained('');
        setTotalMarks(100);
        setGrade('');
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
            <h2>Upload New Assignment</h2>
                <div>
                    <label>Student:</label>
                    <input
                        type="text"
                        value={student}
                        onChange={(e) => setStudent(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div>
                    <label>File:</label>
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        required
                        className="form-input"
                    />
                </div>
                <div>
                    <label>Marks Obtained:</label>
                    <input
                        type="number"
                        value={marksObtained}
                        onChange={(e) => setMarksObtained(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div>
                    <label>Total Marks:</label>
                    <input
                        type="number"
                        value={totalMarks}
                        onChange={(e) => setTotalMarks(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div>
                    <label>Grade:</label>
                    <input
                        type="number"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <br />
                <div>
                    <a href="/Account/StudentEdit">Back</a>
                    <input type="submit" value="Upload Resume" />
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

export default UploadAssignment;
