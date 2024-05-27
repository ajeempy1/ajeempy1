import React from 'react';
import AddProduct from './AddProduct';
import { Table } from 'reactstrap';

function Cart({ productCart, totalCost, onAddProduct, onDeleteProduct }) {
    return (
        <div className="container">
            <AddProduct addProduct={onAddProduct} />
            <Table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {productCart.map(productData => (
                        <tr key={productData.productName}>
                            <td>{productData.productName}</td>
                            <td>{productData.productPrice}</td>
                            <td onClick={() => onDeleteProduct(productData)}>Remove</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <span>Total Amount: {totalCost}</span>
        </div>
    );
}

export default Cart;
