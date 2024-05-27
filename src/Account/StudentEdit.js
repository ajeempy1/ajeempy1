import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header'; // Corrected import path
import Footer from '../components/Footer'; // Corrected import path
import worthyLogo from '../static/images/worthy-logo.png';
import '../static/css/sme_edit_sidebar.css';
import '../static/css/student_edit.css';
import '../static/css/style.css';

function StudentEdit() {
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
                        <a href="#">Assignments <i class="fa fa-chevron-down"></i></a>
                        <ul>
                          <li><a href="/Assignment/AssignmentList">Assignment List</a></li>
                          <li><a href="/Assignment/UploadAssignment">Upload Assignment</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Student Interview Details <i class="fa fa-chevron-down"></i></a>
                                    <ul>
                                        <li><a href="/Sme/MentorshipForm" >Create Mentorship</a></li>
                                        <li><a href="/Sme/MentorshipList" >Mentorship list</a></li>
                                    </ul>
                      </li>
                     <li><a href="#">Input Recorded Video<i class="fa fa-chevron-down"></i></a>
                                    <ul>
                                        <li><a href="/Video_uploads/PythonList">Python</a></li>
                                        <li><a href="/Video_uploads/DjangoList">Django</a></li>
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

export default StudentEdit;
