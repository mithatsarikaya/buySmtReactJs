import React from "react";
import Header from "./Header";
import Product from "./Product";
import products from "./products.json";

export default function App() {
  const [money, setMoney] = React.useState(100);

  return (
    <div>
      <Header money={money} />

      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          money={money}
          setMoney={setMoney}
        />
      ))}
    </div>
  );
}
