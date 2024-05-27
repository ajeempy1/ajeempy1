import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import RegisteredLogo from '../static/images/Registered_Logo-jpg.jpg';

function Header() {
  const [user, setUser] = useState({
    isAuthenticated: false,
    profession: '', // Assuming you have a profession field for the user
  });

  // Function to redirect to edit page based on user's profession
  const redirectToEditPage = () => {
    if (user.profession === "2") { // Assuming SUBJECT_MATTER_EXPERT has value 2
      window.location.href = "/Account/SmeEdit";
    } else {
      window.location.href = "/Account/StudentEdit";
    }
  };

  return (
    <nav className="container-fluid border-bottom fixed-top bg-transparent nav-fixed nav-black">
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-start justify-content-md-between">
          <NavLink to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none brand">
            <img src={RegisteredLogo} alt="Worthyprogress Logo" />
            <span className="d-none d-md-block">Worthyprogress</span>
          </NavLink>
          <div className="col-12 col-md-7 col-lg-7 justify-content-between justify-content-md-end d-flex d-none d-md-block">
            <ul className="nav col-md-auto mb-2  mb-md-0 top-md-nav d-none d-md-block">
              <li><NavLink to="#" className="nav-link px-2 link-dark">Employer</NavLink></li>
              <li><NavLink to="/projects" className="nav-link px-2 link-dark" target="_self">Projects</NavLink></li>
              <li><NavLink to="https:anupks2009.wordpress.com" target="_blank" className="nav-link px-2 link-dark">BLOG</NavLink></li>
              <li><NavLink to="/team" className="nav-link px-2 link-dark" target="_self">Team</NavLink></li>
            </ul>
            <div className="text-end col-3 col-md-auto mb-20">
              {user.isAuthenticated ? (
                <>
                  <button onClick={redirectToEditPage} className="me-2 btn btn-link btn-w-link">ACCOUNT</button>
                  <a href="/Account/Logout" className="me-2 btn btn-primary btn-w-outline">LOGOUT</a>
                </>
              ) : (
                <>
                  <button className="me-2 btn btn-link btn-w-link" style={{ color: 'yellow' }}></button>
                  <a href="/Account/Login"><button className="btn btn-primary btn-w-outline">Login</button></a>
                  <a href="/Account/Register"><button className="btn btn-primary btn-w-outline" style={{ marginLeft: '40px' }}>Join Us</button></a>
                </>
              )}
            </div>
          </div>
          <div className="text-end col-8 col-md-auto mb-20 d-sm-one d-lg-none d-md-none">
            <button className="me-2 btn btn-link btn-w-link">Login</button>
            <button className="btn btn-primary btn-w-outline">Join Us</button>
            <button className="me-2 btn btn-link btn-w-link">ContactUs</button>
          </div>
        </header>
      </div>
    </nav>
  );
}

export default Header;
