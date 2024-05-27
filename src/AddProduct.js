import React, { useState } from 'react';

function AddProduct({ addProduct }) {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);

    const handleAddProduct = () => {
        addProduct(productName, productPrice);
        setProductName('');
        setProductPrice(0);
    };

    return (
        <div className="container">
            <input 
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />
            <input 
                type="number"
                placeholder="Product Price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
            />
            <button className="buttons" onClick={handleAddProduct}>
                Add Product
            </button>
        </div>
    );
}

export default AddProduct;
