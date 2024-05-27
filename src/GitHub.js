import React, { Component } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Container, Row, Col } from 'react-bootstrap';

class GitHub extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true
    };
    this.getGitHubData('greg');
  }

  componentDidMount() {
    //this.getGitHubData('greg');
  }

  getGitHubData(_searchTerm) {
    axios.get(`https://api.github.com/search/users?q=${_searchTerm}`)
      .then(res => {
        this.setState({
          isLoading: false,
          data: res.data.items
        });
        console.log(res.data.items);
      })
      .catch(error => {
        console.error('Error fetching GitHub data:', error);
      });
  }

  render() {
    const listUsers = this.state.data.map(user => (
      <Container key={user.id}>
        <Row>
          <Col xs={3}>
            <a href={user.html_url}>
              <img
                width={64}
                height={64}
                className='mr-3'
                src={user.avatar_url}
                alt="Generic placeholder"
              />
            </a>
          </Col>
          <Col>
            <h5>Login: {user.login}</h5>
            <p>ID: {user.id}</p>
          </Col>
        </Row>
      </Container>
    ));

    return (
      <div>
        <h3>GitHub Users Results</h3>
        {this.state.isLoading && <ReactLoading type='spinningBubbles' color="red" />}
        {listUsers}
      </div>
    );
  }
}

export default GitHub;
