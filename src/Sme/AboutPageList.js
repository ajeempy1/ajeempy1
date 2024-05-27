import React from 'react';

const AboutPageList = ({ aboutList }) => {
    return (
        <div className="container">
            <h1>About Page List</h1>
            {aboutList.map(about => (
                <div className="row" key={about.id}>
                    <div className="col-md-6">
                        <h1>{about.title}</h1>
                        <p>{about.profileOverview}</p>
                        <img src={about.photo} alt={`${about.title} Photo`} className="img-fluid" width="175px" height="175px" />
                    </div>
                    <div className="col-md-6">
                        <span className="fa fa-star checked"></span>
                        <h2>About Me</h2>
                        <p>{about.content}</p>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Achievements</h2>
                            <p>{about.achievements}</p>
                            <h2>Skill Sets</h2>
                            <p>{about.skills}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AboutPageList;
