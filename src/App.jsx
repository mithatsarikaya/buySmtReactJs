import React from "react";
import Header from "./Header";
import Products from "./Products";
import Basket from "./Basket";
import productsData from "./products.json";
import { MainContext } from "./context/MainContext";

export default function App() {
  const [money, setMoney] = React.useState(1000);
  const [basket, setBasket] = React.useState([]);

  let costOfTheBasket = basket.reduce(
    (acc, b) => (acc += b.quantity * b.price),
    0
  );

  const data = {
    money,
    setMoney,
    basket,
    setBasket,
    productsData,
  };

  return (
    <MainContext.Provider value={data}>
      <Header money={money} />

      <Products />

      <div className="basket--container">
        {costOfTheBasket != 0 && "total:  " + costOfTheBasket}
        {basket &&
          basket.map((item, index) => (
            <Basket
              key={index}
              quantity={item.quantity}
              title={item.title}
              price={item.price}
            />
          ))}
      </div>
    </MainContext.Provider>
  );
}
