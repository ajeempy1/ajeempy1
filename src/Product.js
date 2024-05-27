import React, { Component } from 'react';
import Rating from './Rating'; // Adjust the path accordingly
import './App.css'; // Add the CSS file

class Product extends Component {
  render() {
    const { data } = this.props;

    return (
      <li className="product">
        <img
          width={64}
          height={64}
          className='mr-3'
          src={data.imageUrl}
          alt='Product'
        />

        <div className="product-details">
          <h5>{data.productName}</h5>
          <p>Released Date: {data.releasedDate}</p>
          <p>Description: {data.description}</p>
          <p>
            Rating: <Rating rating={data.rating} />
          </p>
          <p>Number of Reviews: {data.numOfReviews}</p>
        </div>
      </li>
    );
  }
}

export default Product;
