import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = () => {
    // Simulate a login process (replace with actual authentication logic)
    if (this.state.username === 'demo' && this.state.password === 'password') {
      this.setState({ isLoggedIn: true });
      this.props.onLogin(); // Call the onLogin function passed from the App component
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  render() {
    // Conditionally render content based on the login status
    if (this.state.isLoggedIn) {
      return <p>You are already logged in!</p>;
    }

    return (
      <div>
        <h2>Login</h2>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
