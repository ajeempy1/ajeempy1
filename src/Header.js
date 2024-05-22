import React from 'react';
import { Link } from 'react-router-dom'; // Add this import
import './Header.css';
import worthyLogo from './images/worthy-logo.png';
import styles from './styles.module.css';


const Header = () => {
    return (
      <nav className="container-fluid border-bottom fixed-top bg-transparent nav-fixed nav-black">
        <header className="d-flex">
          <div className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none brand">
            <img src={worthyLogo} alt="Worthyprogress Logo" />
            <span className="d-none d-md-block">Worthyprogress</span>
          </div>
          <div className="col-12 col-md-9 d-flex justify-content-end align-items-center">
            <div className="col-md-7 d-none d-md-block">
              <ul className="nav col-md-auto mb-2 mb-md-0 top-md-nav">
                <li><a href="#" className="nav-link px-2 link-dark">Employer</a></li>
                <li><a href="#" className="nav-link px-2 link-dark">Projects</a></li>
                <li><a href="https://anupks2009.wordpress.com" target="_blank" className="nav-link px-2 link-dark">BLOG</a></li>
                <li><a className="nav-link px-2 link-dark" target="_self">Team </a></li>
                <li><a className="nav-link px-2 link-dark" target="_self">AboutUs </a></li>
              </ul>
            </div>
            <div className="text-end col-12 col-md-5 col-lg-5 mb-20">
              <button type="button" className="btn btn-primary btn-w-outline">Login</button>
              <button type="button" className="btn btn-primary btn-w-outline">Signup</button>
            </div>
            <div className="text-end col-12 col-md-8 d-sm-one d-lg-none d-md-none">
              <button type="button" className="me-2 btn btn-link btn-w-link">Login</button>
              <button type="button" className="btn btn-primary btn-w-outline">Join Us</button>
              <button type="button" className="me-2 btn btn-link btn-w-link">ContactUs</button>
            </div>
          </div>
        </header>
      </nav>
    );
  };

export default Header;
