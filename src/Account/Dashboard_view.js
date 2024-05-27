import React from 'react';
import Header from '../components/Header'; // Corrected import path
import Footer from '../components/Footer'; // Corrected import path
import '../static/css/style.css'; // Corrected import path
import { Link } from 'react-router-dom';
import HomeBg from '../static/images/home-bg.jpeg';
import codingImage from '../static/images/coding.jpg';
import posterImage from '../static/images/poster-3.jpg';
import posterImage2 from '../static/images/poster-2.jpg';
import worthyLogo from '../static/images/worthy-logo.png';





function Dashboard_view({ messages }) {

  return (


      <div>
        <div className="d-flex flex-column min-vh-100">
          <Header />

     <section className="banner-bg" style={{ backgroundImage: `url(${HomeBg})`, backgroundRepeat: 'no-repeat' }}>
          <div className="bg-overlay">
                <div id="carouselExampleIndicators" class="carousel slide banner-caption" data-bs-ride="carousel">
                        <h2>
                            Welcome to Dashboard. This is the fun game
                        </h2>
            </div>
          </div>
        </section>
          <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
                crossOrigin="anonymous">
          </script>

      <script src="script.js"></script>
       </div>
        <Footer />
      </div>


  );
}


export default Dashboard_view;
