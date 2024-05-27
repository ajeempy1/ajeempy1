import React from 'react';
import { connect } from "react-redux";
import Cart from "./Cart";
import './App.css';

function mapStateToProps(state) {
    return {
        totalCost: state.totalCost,
        productCart: state.productCart
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onAddProduct: (productName, productPrice) => dispatch({
            type: "addProduct",
            productData: {
                productName: productName,
                productPrice: productPrice
            }
        }),
        onDeleteProduct: (productData) => dispatch({
            type: "deleteProduct",
            productData: productData
        })
    };
}

function App({ totalCost, productCart, onAddProduct, onDeleteProduct }) {
    return (
        <div className="App">
            <h1>Shopping Cart</h1>
            <Cart 
                productCart={productCart} 
                totalCost={totalCost}
                onAddProduct={onAddProduct}
                onDeleteProduct={onDeleteProduct}
            />
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
