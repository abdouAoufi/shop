import Navbar from "../components/Navbar/Navbar";
import Cart from "../components/Cart/Cart";
import data from "../constants/data.json";
import { useState } from "react";

function App() {
  const listProducts = data.list;
  const [total, setTotal] = useState(0);

  const updateTotal = (price) => {
    setTotal(total + price)
  };
 
  return (
    <div>
      <Navbar totalPrice={total} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          marginTop: "3rem",
        }}
      >
        {listProducts.map((item) => {
          return (
            <Cart update={updateTotal} name={item.name} price={item.price} image={item.image} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
