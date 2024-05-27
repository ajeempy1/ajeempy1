// Header.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavScrollExample from './NavScrollExample';
import GitHub from './GitHub';
import Home from './Home';
import NotFound from './NotFound';
import './App.css';

class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="navbar">
            <NavScrollExample/>
          </div>
          <div className="content-container">
            <Routes>
              <Route path="/github" element={<GitHub />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default Header;
