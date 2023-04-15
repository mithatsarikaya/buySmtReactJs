export default function Product({
  product,
  money,
  setMoney,
  basket,
  setBasket,
}) {
  function buySmt() {
    setMoney((prevMoney) => prevMoney - product.price);
    setBasket((prevBasket) => {
      if (prevBasket.some((p) => p.id === product.id)) {
        console.log("here there is some");
        return prevBasket.map((p) =>
          p.id === product.id ? { ...p, quantity: parseInt(p.quantity) + 1 } : p
        );
      } else {
        return [
          ...prevBasket,
          {
            id: product.id,
            title: product.title,
            quantity: 1,
          },
        ];
      }
    });
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
