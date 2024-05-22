import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'; // Adjust the path as needed
import Footer from './Footer'; // Adjust the path as needed
import worthyLogo from './images/worthy-logo.png';
import codingImage from './images/coding.jpg';
import posterImage from './images/poster-3.jpg';
import posterImage2 from './images/poster-2.jpg';
import homeBg1 from './images/home-bg.jpeg';
import { Helmet } from 'react-helmet';


  
class App extends Component {
  componentDidMount() {
    // Find the message element
    const messageElement = document.getElementById('message');

    // Check if the message element exists
    if (messageElement) {
      // Set a timeout to hide the message after 10 seconds (10000 milliseconds)
      setTimeout(() => {
        messageElement.style.display = 'none';
      }, 10000);
    }
  }

  render() {
    return (
      <div>
          <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Worthyprogress</title>
        
        {/* CSS */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="{% static 'css/style.css' %}" />
        
        {/* JS */}
        <script src="{% static 'js/script.js' %}"></script>
      </Helmet>

          <Header />
     

        <section className="banner-bg" style={{ backgroundImage: `url(${homeBg1})`, backgroundRepeat: 'no-repeat' }}>
          <div className="bg-overlay">
            <div className="hero-logo">
              <img src={worthyLogo} alt="Worthyprogress Logo" />
            </div>
            <div id="carouselExampleIndicators" className="carousel slide banner-caption" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container text-center">
                    <h2>
                      Python for Beginners Training and JOB Placement <span>#Python</span>
                    </h2>
                    <br />
                    {/* <a href="{% url 'sme:sme_profile' %}" className="btn btn-primary btn-lg px-4 me-sm-3">Explore training</a> */}
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container text-center">
                    <h2>
                      Python and Django Training and JOB Placement<span>#Django</span>
                    </h2>
                    <br />
                    {/* <a href="{% url 'sme:sme_profile' %}" className="btn btn-primary btn-lg px-4 me-sm-3">Explore training</a> */}
                  </div>
                </div>
                <div className="carousel-item text-center">
                  <div className="container">
                    <h2>
                      AWS Solution Architect Associate with Data Engineering and JOB Placement<span>#AWS</span>
                    </h2>
                    <br />
                    {/* <a href="{% url 'sme:sme_profile' %}" className="btn btn-primary btn-lg px-4 me-sm-3">Explore training</a> */}
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>

        <section className="upcoming-webinars container-fluid py-5">
          <div className="container">
            <div className="row">
              <h3 className="display-6 py-5 text-center custom-header">Upcoming <strong>Webinars</strong></h3>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-img">
                    {/* <a href={url('training:webinar_page_view')}> */}
                    <img src={codingImage} alt="" />
                    <div className="time-caption d-flex justify-content-between">
                      <div className="date">12</div>
                      <div className="year-month">
                        <span className="block">April</span>
                        2022
                      </div>
                      <div className="time">
                        <span className="block"> 11.30</span>
                        AM IST
                      </div>
                    </div>
                    {/* <a href="{% url 'training:register' %}"> <button className="btn btn-yellow">Register</button></a> */}
                  </div>
                  <div className="card-body">
                    <p className="card-text card-text-big">Python for Beginners Training</p>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      </svg>
                    </span>
                    <span>Anup Kumar S</span>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-img">
                    <img src={posterImage} alt="" />
                    <div className="time-caption d-flex justify-content-between">
                      <div className="date">12</div>
                      <div className="year-month">
                        <span className="block">April</span>
                        2022
                      </div>
                      <div className="time">
                        <span className="block"> 11.30</span>
                        AM IST
                      </div>
                    </div>
                    {/* <a href="{% url 'training:register' %}"><button className="btn btn-yellow">Register</button></a> */}
                  </div>
                  <div className="card-body">
                    <p className="card-text card-text-big">Python and Django Training</p>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      </svg>
                    </span>
                    <span>Anup Kumar S</span>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-img">
                    <img src={posterImage2} alt="" />
                    <div className="time-caption d-flex justify-content-between">
                      <div className="date">12</div>
                      <div className="year-month">
                        <span className="block">April</span>
                        2022
                      </div>
                      <div className="time">
                        <span className="block"> 11.30</span>
                        AM IST
                      </div>
                    </div>
                    {/* <a href="{% url 'training:register' %}"><button className="btn btn-yellow">Register</button></a> */}
                  </div>
                  <div className="card-body">
                    <p className="card-text card-text-big">AWS Solution Architect</p>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      </svg>
                    </span>
                    <span>Anup Kumar S</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        
      </div>
    );
  }
}

export default App;