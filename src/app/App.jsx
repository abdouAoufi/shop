import Navbar from "../components/Navbar/Navbar";
import Cart from "../components/Cart/Cart";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [listProducts, setListProduct] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged");
    if (isLogged !== "true") {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    fetch("http://192.168.1.34:1337/product")
      .then((data) => {
        data.json().then((list) => {
          setListProduct(list.products);
        });
      })
      .catch((error) => console.log("============", error));
  }, []);

  const updateTotal = (price, name) => {
    setTotal(total + price);
    console.log(name);
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
        {listProducts.length === 0 ? (
          <div> loading ...... </div>
        ) : (
          listProducts.map((item) => {
            return (
              <Cart
                update={updateTotal}
                name={item.name}
                price={item.price}
                image={item.imgUrl}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
