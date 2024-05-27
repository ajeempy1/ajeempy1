import React from 'react';

const CoursePlanList = ({ coursePlans, reviews, aboutMeObject }) => {

    // Utility function to convert newlines to <br> tags
    const formatLineBreaks = (text) => {
        return text.split('\n').map((str, index) => (
            <React.Fragment key={index}>
                {str}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <section className="container-fluid profile py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-4 col-md-3 col-lg-3 text-center">
                        <div className="avatar">
                            <img src={aboutMeObject.photo.url} alt={`${aboutMeObject.title} Photo`} className="img-fluid" width="175px" height="175px" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-8 col-md-9 col-lg-9">
                        <div className="trainer-info">
                            <h3>{aboutMeObject.title}</h3>
                            <p>{aboutMeObject.profile_overview}</p>
                            <div>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 py-5">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a href="{% url 'sme:about_page_list' %}" className="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">About Me</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Courses</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a href="{% url 'sme:about_page_list' %}" className="nav-link active" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Review</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            {/* About Me */}
                            <div className="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <br />
                                <h6 className="mb-3"><strong>Professional Summary</strong></h6>
                                <hr />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-right-square" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                            </svg>
                                        </span>
                                        {formatLineBreaks(aboutMeObject.content)}
                                    </li>
                                </ul>
                                <br />
                                <br />
                                <h6 className="mb-3"><strong>Achievements</strong></h6>
                                <hr />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{formatLineBreaks(aboutMeObject.Achievements)}</li>
                                </ul>
                                <br />
                                <br />
                                <h6 className="mb-3"><strong>Skills Sets</strong></h6>
                                <br />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{formatLineBreaks(aboutMeObject.Skills)}</li>
                                </ul>
                            </div>
                            {/* Courses */}
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <div className="accordion" id="accordionExample">
                                    {coursePlans.map(coursePlan => (
                                        <div className="accordion-item" key={coursePlan.id}>
                                            <h2 className="accordion-header" id={`heading${coursePlan.id}`}>
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${coursePlan.id}`} aria-expanded="true" aria-controls={`collapse${coursePlan.id}`}>
                                                    {coursePlan.plan_name}
                                                </button>
                                            </h2>
                                            <div id={`collapse${coursePlan.id}`} className="accordion-collapse collapse" aria-labelledby={`heading${coursePlan.id}`} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <table className="table">
                                                        <thead className="table-dark">
                                                            <tr>
                                                                <th></th>
                                                                <th>Indian Currency (INR - RS)</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>{coursePlan.plan_description}</td>
                                                                <td>{coursePlan.course_fee} + GST</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Review */}
                            <div className="tab-pane fade show active" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <div id="review-content" className="content">
                                    {reviews.map(review => (
                                        <div className="row r-row" key={review.id}>
                                            <div className="col-12 col-sm-2 text-center">
                                                <div className="reviewer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                                    </svg>
                                                </div>
                                                <div>{review.reviewer_name}</div>
                                            </div>
                                            <div className="col-12 col-sm-10">
                                                <br />
                                                <div>
                                                    {review.rating}
                                                </div>
                                                <figure>
                                                    <blockquote className="blockquote">
                                                        <p>{review.review_content}</p>
                                                    </blockquote>
                                                    <figcaption className="blockquote-footer">
                                                        {review.review_course_attended}
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    );
};

export default CoursePlanList;
