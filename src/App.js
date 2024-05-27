import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Rating from './Rating'; 
import { IoStar, IoStarOutline } from 'react-icons/io';

class App extends Component {
  render() {
    return (
      <div>
        <Rating rating={1} />
        <Rating rating={2} />
        <Rating rating={3} />
        <Rating rating={4} />
        <Rating rating={5} />
      </div>
    );
  }
}

export default App;
