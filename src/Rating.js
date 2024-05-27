import React, { Component } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

const styles = {
  starstyle: {
    color: 'orange',
  }
};

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = { rating: this.props.rating };
  }

  handleClick = (newRating) => {
    this.setState({ rating: newRating });
  };

  render() {  
    return (
      <div style={styles.starstyle}>
        {/* this is state rating : using state */}
        <h2>Rating2: {this.state.rating}</h2>
        
        {this.state.rating >= 1 ? (<IoIosStar onClick={this.handleClick.bind(this, 1) }/> ) : (<IoIosStarOutline onClick={this.handleClick.bind(this, 1) } />)}
        {this.state.rating >= 2 ? (<IoIosStar onClick={this.handleClick.bind(this, 2) } /> ) : (<IoIosStarOutline onClick={this.handleClick.bind(this, 2) } />)}
        {this.state.rating >= 3 ? (<IoIosStar onClick={this.handleClick.bind(this, 3) } /> ) : (<IoIosStarOutline onClick={this.handleClick.bind(this, 3) } />)}
        {this.state.rating >= 4 ? (<IoIosStar onClick={this.handleClick.bind(this, 4) } /> ) : (<IoIosStarOutline onClick={this.handleClick.bind(this, 4) } />)}
        {this.state.rating >= 5 ? (<IoIosStar onClick={this.handleClick.bind(this, 5) } /> ) : (<IoIosStarOutline onClick={this.handleClick.bind(this, 5) } />)}
      </div>
    );
  }
}

export default Rating;
