import React from 'react';

function Rating({ rating }) {
    return (
        <div className="rating" style={{ color: "#ff523b" }}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star-half-alt"></i>
            <i className="far fa-star"></i>

        </div>
    );
}

export default Rating;
