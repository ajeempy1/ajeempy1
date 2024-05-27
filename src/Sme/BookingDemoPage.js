import React, { useState, useEffect } from 'react';
import Header from '../components/Header'; // Corrected import path
import Footer from '../components/Footer'; // Corrected import path
import worthyLogo from '../static/images/worthy-logo.png';
import '../static/css/sme_edit_sidebar.css';
import '../static/css/style.css';
import { Helmet } from 'react-helmet';

const BookingDemoPage = ({ sme, form, messages }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", event.target);
    };

    // Define choices for booking time
    const TIME_CHOICES_24_HR = [
        { value: '06:00:00', label: '6:00 AM' },
        { value: '07:00:00', label: '7:00 AM' },
        { value: '08:00:00', label: '8:00 AM' },
        { value: '18:00:00', label: '6:00 PM' },
        { value: '19:00:00', label: '7:00 PM' },
        { value: '20:00:00', label: '8:00 PM' },
    ];

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
                                    <div className="contenedor-menu">
                                        <ul className="menu">
                                            <li>
                                                <a href="#">Student <i className="fa fa-chevron-down"></i></a>
                                                <ul>
                                                    <li><a href="/Sme/AssessmentPage">Assessment</a></li>
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
                                            <form method="post" className="center-align" onSubmit={handleSubmit}>
                                                {messages && (
                                                    <div className="messages" style={{ color: '#FEC917' }}>
                                                        {messages.map((message, index) => (
                                                            <div key={index}>{message}</div>
                                                        ))}
                                                    </div>
                                                )}

                                                <div className="form-container">
                                                    {sme && (
                                                        <div className="left-panel">
                                                            <h3>Booking Demo</h3>
                                                            <h4>SME: {sme.sme_name}</h4>
                                                            <img src={sme.photo.url} alt={`${sme.sme_name} Photo`} width="175px" height="175px" />
                                                        </div>
                                                    )}
                                                    <div className="right-panel">
                                                        {sme && (
                                                            <p>Course: {sme.calender_set.last.course}</p>
                                                        )}




                                                        <div className="form-group">
                                                            <label htmlFor="booking_date">Booking Date</label>
                                                            <input type="date" id="booking_date" name="booking_date" className="form-control" />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="booking_time">Booking Time</label>
                                                            <select id="booking_time" name="booking_time" className="form-control">
                                                                <option value="">Select a time</option>
                                                                {TIME_CHOICES_24_HR.map((time, index) => (
                                                                    <option key={index} value={time.value}>{time.label}</option>
                                                                ))}
                                                            </select>
                                                        </div>

                                                        <input type="hidden" name="csrfmiddlewaretoken" value="{% csrf_token %}" />
                                                        {form.as_p && form.as_p}

                                                        <div className="button-container">
                                                            <a href="/Sme/SmeProfile" className="button">Back</a>
                                                            <input type="submit" value="Submit" />
                                                        </div>
                                                    </div>
                                                </div>
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

BookingDemoPage.defaultProps = {
    sme: {
        sme_name: '',
        photo: {
            url: ''
        },
        calender_set: {
            last: {
                course: ''
            }
        }
    },
    form: {
        as_p: ''
    },
    messages: []
};

export default BookingDemoPage;