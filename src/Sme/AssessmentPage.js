import React from 'react';
import Header from '../components/Header'; // Corrected import path
import Footer from '../components/Footer'; // Corrected import path
import worthyLogo from '../static/images/worthy-logo.png';
import '../static/css/style.css';
import '../static/css/assesmentpage.css'; // Importing the new CSS file for AssessmentPage

const AssessmentPage = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <div className="flex-grow-1 d-flex justify-content-center align-items-center">
                <div className="centered-container">
                    <h2>This page will be coming soon!</h2>
                    <br />
                    <h5><a href="/Sme/SmeProfile">Back to Booking page</a></h5>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AssessmentPage;
