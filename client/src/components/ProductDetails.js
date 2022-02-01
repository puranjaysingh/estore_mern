import React from 'react';

function ProductDetails() {
    return (
        <div className="small-container single-product">
            <div className="row">
                <div className="col-2">
                    <img src="../images/gallery-1.jpg" width="100%" id="ProductImg" />

                 

                </div>
                <div className="col-2">
                    <p>Home / T-Shirt</p>
                    <h1>Red Printed T-Shirt by HRX</h1>
                    <h4>$50.00</h4>
                    <a href="" className="btn">Add To Cart</a>

                    <h3>Product Details <i className="fa fa-indent"></i></h3>
                    <br />
                    <p>Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt. Team it with a pair of
                        shorts for your morning workout or a denims for an evening out with the guys.</p>
                </div>
            </div>
        </div>


    );
}

export default ProductDetails;
