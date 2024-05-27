import React from 'react';
import Header from '../components/Header'; // Corrected import path
import Footer from '../components/Footer'; // Corrected import path
import '../static/css/style.css';
import '../static/css/addreview.css'; // Importing the new CSS file for AssessmentPage

const AddReview = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", event.target);
    };

    // Placeholder form data
    const form = {
        fields: {
            selected_sme: {
                choices: [
                    [1, '........'],
                    [2, '........'],
                    // Add more choices as needed
                ]
            }
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <div className="flex-grow-1 d-flex justify-content-center align-items-center">
                <div className="centered-container-custom">
                    <form onSubmit={handleSubmit} className="form-grid-custom">
                        <h2>Add Review</h2>

                        <input type="hidden" name="csrfmiddlewaretoken" value="{% csrf_token %}" />

                        <div className="form-group-custom">
                            <label htmlFor="selected_sme">Select SME:</label>
                            <select id="selected_sme" name="selected_sme" className="form-control-custom">
                                {form.fields.selected_sme.choices.map(choice => (
                                    <option key={choice[0]} value={choice[0]}>{choice[1]}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group-custom">
                            <label htmlFor="rating">Rating:</label>
                            <input type="number" id="rating" name="rating" min="1" max="5" className="form-control-custom" />
                        </div>
                        <div className="form-group-custom">
                            <label htmlFor="review_content">Review Content:</label>
                            <textarea id="review_content" name="review_content" className="form-control-custom"></textarea>
                        </div>
                        <div className="form-group-custom">
                            <label htmlFor="review_course_attended">Review Course Attended:</label>
                            <input type="text" id="review_course_attended" name="review_course_attended" className="form-control-custom" />
                        </div>
                        <div className="form-group-custom">
                            <label htmlFor="reviewer_name">Reviewer Name:</label>
                            <input type="text" id="reviewer_name" name="reviewer_name" readOnly className="form-control-custom" />
                        </div>

                        <div className="form-group-custom button-container-custom">
                        <a href="SmeProfile">Back</a>
                            <input type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AddReview;
