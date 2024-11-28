import React from "react";
import CardPizza from "./CardPizza";
import Header from "./Header";
import { pizzas } from "../data/pizzas";

const Home = () => {
  return (
    <div>
      <Header />
      <h2 className="text-center mt-4">Nuestras Pizzas</h2>
      <div className="d-flex justify-content-around flex-wrap">
        {pizzas.map((pizza, index) => (
          <CardPizza
            key={index}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
