export default function Product({
  product,
  money,
  setMoney,
  basket,
  setBasket,
}) {
  //if item is already in the basket then increase quantity, else add item as an object
  function buySmt() {
    setMoney((prevMoney) => prevMoney - product.price);
    setBasket((prevBasket) => {
      if (prevBasket.some((p) => p.id === product.id)) {
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
            price: product.price,
          },
        ];
      }
    });
  }

  function sellSmt() {
    setMoney((prevMoney) => prevMoney + product.price);

    setBasket((prevBasket) => {
      let quantityOfSoldItem = prevBasket.find(
        (item) => item.id === product.id
      ).quantity;

      if (quantityOfSoldItem > 1) {
        return prevBasket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevBasket.filter((item) => item.id !== product.id);
      }
    });
  }

  //check if product is in the basket
  let isItemInTheBasket = basket.some((item) => item.id === product.id);

  return (
    <div key={product.id} className="product">
      <button disabled={money < product.price} onClick={buySmt}>
        Buy
      </button>
      <h3></h3>
      {product.title} ${product.price}
      <button disabled={!isItemInTheBasket} onClick={sellSmt}>
        Sell
      </button>
    </div>
  );
}
