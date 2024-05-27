import React, { Component } from 'react';

class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false // Change this to true to see the different rendering
    };
  }

  render() {
    // Conditionally render different content based on the isLoggedIn state
    if (this.state.isLoggedIn) {
      // Render content for logged-in user
      return (
        <div>
          <h1>Welcome, User!</h1>
          <p>This is the content for a logged-in user.</p>
        </div>
      );
    } else {
      // Render content for non-logged-in user with a login link
      return (
        <div>
          <h1>Please Log In If You're Not Logged In</h1>
          <p>This is the content for a non-logged-in user.</p>
          <p>
            <a href="/login">Login</a> {/* Adjust the href accordingly */}
          </p>
        </div>
      );
    }
  }
}

export default ExampleComponent;
