import React, { Component } from 'react';
import Products from './Products'; 
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';


class App extends Component {
  render() {
    const isvalid = true;
    return (
      <div>
        <h1>My First React App!</h1>
        <Products />
        <Button variant='danger' disabled={!isvalid}>Default</Button>
        {/* <Button variant='danger' disabled={!isvalid}>Default</Button> in this button will comes red color */}
         
      </div>

    );
  }
}

export default App;
