export default function Basket({ name, price, quantity }) {
  return (
    <div>
      {name} X {quantity} = {price * quantity}
    </div>
  );
}
