import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../static/css/style.css';

function SmeProfile({ smeDetail = [], messages = [], error_messages = [] }) {
    // Temporary default data for testing purposes
    const defaultSmeDetail = [
        {
            id: 1,
            photo: { url: 'https://via.placeholder.com/250x300' },
            skills: 'Python, Django, Reactjs',
            sme_name: 'Anup Kumar',
            sme_experience: 5,
            review: { id: 1, rating: 4 },
            sme_profile_summary: '15+ years of Experienced Python Fullstack and AWS Cloud.'
        }
    ];

    const defaultMessages = ["Welcome to SME profile page!"];

    const smeDetailsToRender = smeDetail.length ? smeDetail : defaultSmeDetail;
    const messagesToRender = messages.length ? messages : defaultMessages;

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <section className="container-fluid profile py-5">
                <div className="container">
                    {error_messages.length > 0 && (
                        <div className="error-messages">
                            <ul>
                                {error_messages.map((message, index) => (
                                    <li key={index}>{message}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <ul style={{ listStyleType: 'none' }}>
                        {messagesToRender.map((message, index) => (
                            <li key={index} style={{ fontWeight: 'bold', color: message.tags && message.tags.includes('seat-number') ? 'pink' : 'darkblue' }}>
                                <strong>{message}</strong>
                            </li>
                        ))}
                    </ul>
                    <div className="row">
                        {smeDetailsToRender.map(sme_object => (
                            <div key={sme_object.id} className="col-md-12 result-item">
                                <div className="card custom-card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-3 card_avatar">
                                            <a href={`/Sme/SmeDetail?id=${sme_object.id}`}>
    {sme_object.photo && <img src={sme_object.photo.url} alt="SME Photo" width="250px" height="300px" />}
</a>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-body custom-card-body">
                                                <h5 className="card-title">{sme_object.skills}</h5>
                                                <p className="card-text d-flex">
                                                    <span className="author">{sme_object.sme_name}</span>
                                                    <span className="exp">{sme_object.sme_experience} years</span>
                                                </p>
                                                <div className="rating d-flex">
                                                    <div className="rating-count" id={`review-rating-${sme_object.review.id}`}>
                                                        Rating: {sme_object.review.rating}
                                                        {/* Star rating will be inserted here */}
                                                    </div>
                                                    <div className="rating-icon-group">
                                                        {[...Array(5)].map((_, index) => (
                                                            <svg key={index} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                </div>
                                                <p className="card-text short-desc">{sme_object.sme_profile_summary}</p>
                                                <div className="custom-card-footer d-flex justify-content-between align-items-center">
                                                    <div className="wedgets">
                                                        <button type="button" className="btn btn-light">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                                                    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <a href="/Sme/AddReview">Like</a>
                                                            </span>
                                                        </button>
                                                        <button type="button" class="btn btn-light">
                                       <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                                          </svg>
                                       </span>
                                        <span>
                                            <a href="/Sme/AddReview">Share</a>
                                        </span></button>
                                    <button type="button" class="btn btn-light">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                              </svg>
                                        </span>
                                    <span>
                                        <a href="/Sme/AddReview">Follow</a>
                                    </span></button>
                                    <button type="button" class="btn btn-light">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                                            <path d="M2 6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h5v7.586l-2-2V11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6z"/>
                                            <path d="M2 2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1.586L12 14H15a1 1 0 0 1 1 1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2z"/>
                                        </svg>
                                    </span>
                                    <span>
                                        <a href="/Sme/AddReview">Feedback</a>
                                    </span>
                                </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col col-md-3">
                            <ul class="list-group list-group-flush custom-list-group">
                                <li class="list-group-item">
                                    <div>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                                            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                          </svg></span>
                                        <span>Webinars</span>
                                    </div>
                                </li>
                                <a href="/Sme/BookingDemoPage" style={{ textDecoration: 'none' }}>
                                <li class="list-group-item">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                      </svg></span>
                                    <span>Book A Demo</span>
                                </li>
                                </a>
                                <a href="/Sme/BookingFormPage" style={{ textDecoration: 'none' }}>
                                <li class="list-group-item">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                      </svg></span>
                                    <span>Book A Class</span>
                                </li>
                                </a>
                                <li class="list-group-item">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                                      </svg></span>
                                    <span>Message</span>
                                </li>
                            </ul>
                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default SmeProfile;
