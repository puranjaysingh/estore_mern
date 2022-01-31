import React from 'react';
import products from '../products';
import Product from './Product';

function Products() {
    return (
        <div className="small-container">
            <h1 className="title">Latest Products</h1>
            <div className="row">
                {products.map(product => (
                    <Product product={product} key={product._id} />
                ))}
            </div>
        </div>
    );
}

export default Products;
