
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cards.css'; 


const Cards = ({ image, title, description, id }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
      <Link to={`/card/${id}`}>Ver más</Link>
    </div>
  );
};

export default Cards;

