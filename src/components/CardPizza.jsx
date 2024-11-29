import React from "react";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card mb-4 shadow-sm" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Ingredientes:</strong>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </p>
        <p className="card-text">
          <strong>Precio:</strong> ${price.toLocaleString()}
        </p>
        <button className="btn btn-primary w-100">Añadir al carrito</button>
      </div>
    </div>
  );
};

export default CardPizza;
