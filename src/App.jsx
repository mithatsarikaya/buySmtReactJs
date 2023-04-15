import React from "react";
import Header from "./Header";
import Product from "./Product";
import Basket from "./Basket";
import products from "./products.json";

export default function App() {
  const [money, setMoney] = React.useState(1000);
  const [basket, setBasket] = React.useState([]);
  console.log(basket);

  return (
    <div>
      <Header money={money} />

      <div className="product--container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            money={money}
            setMoney={setMoney}
            basket={basket}
            setBasket={setBasket}
          />
        ))}
      </div>

      <div className="basket--container">
        {basket &&
          basket.map((item, index) => (
            <Basket key={index} quantity={item.quantity} title={item.title} />
          ))}
      </div>
    </div>
  );
}
