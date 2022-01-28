import Navbar from "../components/Navbar/Navbar";
import Cart from "../components/Cart/Cart";
import data from "../constants/data.json"

function App() {
  console.log(data.list)
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", flexWrap: "wrap" , gap : 12 }}>
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
    </div>
  );
}

export default App;
