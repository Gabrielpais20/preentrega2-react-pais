import React from 'react';
import { useParams } from 'react-router-dom';

const CardDetail = ({ cardData }) => {
  const { id } = useParams();

  const card = cardData.find(card => card.id === parseInt(id));

  return (
    <div>
      <h2>{card?.title}</h2> 
      <img src={card?.image} alt={card?.title} /> 
      <p>{card?.description}</p> 
    </div>
  );
};

export default CardDetail;
