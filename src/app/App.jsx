import Navbar from "../components/Navbar/Navbar";
import Cart from "../components/Cart/Cart";
import data from "../constants/data.json"

function App() {
  const listProducts = data.list;
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", flexWrap: "wrap" , gap : 12 }}>
        {
          listProducts.map(item => {
            return <Cart name={item.name} price={item.price} image={item.image} />
          })
        }
      </div>
    </div>
  );
}

export default App;
