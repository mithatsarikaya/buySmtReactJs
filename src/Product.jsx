export default function Product({ product, money, setMoney }) {
  function decreaseMoney() {
    setMoney((prevMoney) => prevMoney - product.price);
  }

  function increaseMoney() {
    setMoney((prevMoney) => prevMoney + product.price);
  }

  return (
    <div className="product--container">
      <button disabled={money < product.price} onClick={decreaseMoney}>
        Buy
      </button>
      <h3>
        {product.title} ${product.price}
      </h3>
      <button onClick={increaseMoney}>Sell</button>
    </div>
  );
}
