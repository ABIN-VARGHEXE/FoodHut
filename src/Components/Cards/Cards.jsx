import React from 'react';
import "./Cards.css";

const Card = ({ id, name, price, description, image }) => {
  return (
    <div className="card-container">
      <img className="card-image" src={image} alt="Food Item" />
      <div className="card-details">
        <h3 className="card-name">{name}</h3>
        <p className="card-description">{description}</p>
        <span className="card-price">${price}</span>
      </div>
      <button className='order-btn'>
        Add to Cart
      </button>
    </div>
      );
};

export default Card;
