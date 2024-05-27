import React from 'react';
import Header from '../components/Header'; // Corrected import path
import Footer from '../components/Footer'; // Corrected import path
import worthyLogo from '../static/images/worthy-logo.png';
import '../static/css/style.css';

const WebinarPage = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <div className="flex-grow-1 d-flex justify-content-center align-items-center">
                <div className="centered-container">
                    <h2>Webinar Coming Soon!</h2>
            <p>Stay tuned for our upcoming webinar.</p>
            <a href="/" className="back-to-index">Back to home page</a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default WebinarPage;
