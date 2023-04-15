export default function Product({
  product,
  money,
  setMoney,
  basket,
  setBasket,
}) {
  function buySmt() {
    setMoney((prevMoney) => prevMoney - product.price);
    // setBasket((prevBasket) => prevBasket.map());
  }

  function sellSmt() {
    setMoney((prevMoney) => prevMoney + product.price);
  }

  //check if product is in the basket
  let isItemInTheBasket = basket.some((item) => item.id === product.id);

  console.log(basket);
  // console.log(basket);
  // console.log(isItemInTheBasket);
  return (
    <div className="product">
      <button disabled={money < product.price} onClick={buySmt}>
        Buy
      </button>
      <h3>
        {product.title} ${product.price}
      </h3>
      <button disabled={!isItemInTheBasket} onClick={sellSmt}>
        Sell
      </button>
    </div>
  );
}
