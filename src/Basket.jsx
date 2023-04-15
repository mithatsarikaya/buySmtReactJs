export default function Basket({ title, quantity, price }) {
  return (
    <div>
      {title} : {quantity} X {price} = {quantity * price}
    </div>
  );
}
