import React, { Component} from "react";
import AddProduct from './AddProduct';
import { Table } from 'reactstrap';

class Cart extends Component {
    render(){
        return (
            <div className="container">
                <AddProduct addProduct = {this.props.onAddProduct} />
                <Table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.productCart.map(productData => (
                            <tr key={productDtata.productName}>
                                <td>{productDtata.productName}</td> 
                                <td>{productDtata.productPrice}</td>
                                <td onClick = {() =>this.props.onDeleteProduct(productDatsa)} Remove></td>

                            </tr>
                        ))}
                    </tbody>
                </Table>
                <span>Total Amount: {this.props.totalCost}</span>
            </div>
        );
    }
};

export default Cart;