import React, { Component } from 'react';

class App extends Component {
  render() {
    const Products = ["Learning React", "Pro React", "Beginning React"];
    const listProducts = Products.map((product) =>
        <li key={product.toString()}>{product}</li>
    );

    return (
      <div>
        <ul>{listProducts}</ul>
      </div>
    );
  }
}

export default App;