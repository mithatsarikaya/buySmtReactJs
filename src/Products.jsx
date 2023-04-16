import { useContext } from "react";
import Product from "./Product";
import { MainContext } from "./context/MainContext";

export default function Products() {
  const { productsData } = useContext(MainContext);

  return (
    <div className="product--container">
      {productsData.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
