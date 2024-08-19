import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><strong>Ingredientes:</strong></p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p className="card-text"><strong>Precio:</strong> ${price.toLocaleString()}</p>
        <button className="btn btn-primary">Ver Más</button>
        <button className="btn btn-secondary ml-2">Añadir 🛒</button>
      </div>
    </div>
  );
};

export default CardPizza;
