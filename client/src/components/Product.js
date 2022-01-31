import React from 'react';
import Rating from './Rating';


function Product({ product }) {
    return (
        <div className="col-3">
            <img src={product.image} />
            <h2>{product.name}</h2>
            <h3 style={{ color: "#ff523b" }}>{product.rating} from {product.numReviews} reviews</h3>
            <Rating rating={product.rating} />
            <h1>${product.price}</h1>
        </div>
    )
}

export default Product;
