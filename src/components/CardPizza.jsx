import PropTypes from "prop-types";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card" style={{ width: "18rem", marginBottom: "20px" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Precio: ${price.toLocaleString()}</p>
        <p className="card-text">Ingredientes: {ingredients.join(", ")}</p>
        <button className="btn btn-primary">Ver más</button>
        <button className="btn btn-success ml-2">Añadir</button>
      </div>
    </div>
  );
};

CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
};

export default CardPizza;
