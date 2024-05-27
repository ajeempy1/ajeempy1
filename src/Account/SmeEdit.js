import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header'; // Corrected import path
import Footer from '../components/Footer'; // Corrected import path
import worthyLogo from '../static/images/worthy-logo.png';
import '../static/css/sme_edit_sidebar.css';
import '../static/css/student_edit.css';
import '../static/css/style.css';

function SmeEdit() {
  const [nickName, setNickName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [displayPhotoContainer, setDisplayPhotoContainer] = useState(false);

  useEffect(() => {
    // Retrieve imageUrl from localStorage on component mount
    const storedImageUrl = localStorage.getItem('uploadedImageUrl');
    if (storedImageUrl) {
      setImageUrl(storedImageUrl);
      setDisplayPhotoContainer(true); // Display photo container if there's an image URL
    }
  }, []);

  useEffect(() => {
    // Store imageUrl in localStorage whenever it changes
    localStorage.setItem('uploadedImageUrl', imageUrl);
  }, [imageUrl]);

  function updateImagePreview() {
    const imageInput = document.querySelector('input[type="file"]');
    if (imageInput.files && imageInput.files[0]) {
      const file = imageInput.files[0];
      const reader = new FileReader();
      reader.onload = function(e) {
        setImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
      setDisplayPhotoContainer(true);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic goes here
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
                          <li><a href="/Account/UpdateEmail">Update Email</a></li>
                        </ul>
                      </li>
                      <li><a href="/Sme/ReviewList">Review</a></li>
                      <li><a href="#">Resume<i class="fa fa-chevron-down"></i></a>
                        <ul>
                          <li><a href="/User_profile/ResumeUpload">Upload Resume</a></li>
                          <li><a href="/User_profile/ResumeList">Resume list</a></li>
                        </ul>
                      </li>
                      <li><a href="/User_profile/CreateProject">Project </a></li>
                      <li><a href="#">Webinar</a></li>
                      <li><a href="#">Work Experience<i class="fa fa-chevron-down"></i></a>
                        <ul>
                          <li><a href="/User_profile/ExperienceCreate">Create Experience</a></li>
                          <li><a href="/User_profile/ExperienceList">list</a></li>
                        </ul>
                      </li>
                      <li><a href="/User_profile/CreateSkill">Skills</a></li>
                      <li><a href="#">Create Course<i class="fa fa-chevron-down"></i></a>
                        <ul>
                          <li><a href="/Sme/CreateCourse">Create Course</a></li>
                          <li><a href="/Sme/Coursesmelist">List</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Assessment <i class="fa fa-chevron-down"></i></a>
                        <ul>
                          <li><a href="/Assignment/AssessmentList" >Assessment List</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Video Uploaded<i class="fa fa-chevron-down"></i></a>
                        <ul>
                          <li><a href="/Video_uploads/VideoUpload">Recorded Video Upload</a></li>
                          <li><a href="#">List/Display<i class="fa fa-chevron-down"></i></a></li>
                          <li><a href="/Video_uploads/PythonList">Python</a></li>
                          <li><a href="/Video_uploads/DjangoList">Django</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Interview Remark Form<i class="fa fa-chevron-down"></i></a>
                        <ul>
                          <li><a href="/Sme/InterviewRemarkForm">Create interview remark form</a></li>
                          <li><a href="/Sme/InterviewRemarkList">interview remark List</a></li>
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
                      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
                        <h2>Edit your account</h2>
                        <div>
                          <label htmlFor="id_nick_name">Nick name:</label>
                          <input type="text" name="nick_name" value={nickName} maxLength="30" id="id_nick_name" onChange={(e) => setNickName(e.target.value)} />
                        </div>
                        <div>
                          <label htmlFor="id_last_name">Last name:</label>
                          <input type="text" name="last_name" value={lastName} maxLength="30" id="id_last_name" onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div>
                          <label htmlFor="id_contact">Contact no:</label>
                          <input type="text" name="contact" maxLength="15" id="id_contact" />
                        </div>
                        <div>
                          <label htmlFor="id_upload_image">image:</label>
                          <input type="file" name="upload_image" accept="image/*" id="id_upload_image" />
                        </div>
                        <div>
                        <br />
                          <div className="img">
                            <img id="upload_image-preview" src={imageUrl ? imageUrl : '/path_to_default_image.jpg'} alt="Image Preview" width="140px" height="140px" />
                          </div>
                        </div>

                        <p>
                          <a href="/">Back</a>
                          <input type="submit" value="Save Changes" onClick={updateImagePreview} />
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
}

export default SmeEdit;
