import React from "react";
import Header from "./Header";

export default function App() {
  const [money, setMoney] = React.useState(100);

  return (
    <div>
      <Header money={money} />
    </div>
  );
}
