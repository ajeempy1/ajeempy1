// App.js
import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import ExampleComponent from './ExampleComponent';

function App() {
  // Use state to track the login status
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Function to update login status
  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className='App'>
      {/* Conditionally render Login or ExampleComponent based on login status */}
      {!isLoggedIn ? (
        <div>
          {/* Pass onLogin function as a prop to Login component */}
          <Login onLogin={handleLogin} />
        </div>
      ) : (
        <div>
          <p>You are already logged in!</p>
          <ExampleComponent />
        </div>
      )}
    </div>
  );
}

export default App;
