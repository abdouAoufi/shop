import "./root.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar(props) {
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);
  const block = {
    position: "absolute",
    right: 10,
    backgroundColor: "white",
    border: "1px solid black",
    padding: 12,
    display : "block"
  }
  const hide = {
    display : "none",
    position: "absolute",
    right: 10,
    backgroundColor: "white",
    border: "1px solid black",
    padding: 12,
  }
  const logout = () => {
    localStorage.removeItem("isLogged");
    localStorage.removeItem("email");
    navigate("/login");
  };
  return (
    <nav style={{ position: "relative" }}>
      <div className="inner-container">
        <h3>Shop</h3>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
        <div>
          <p onClick={() => {
            setIsShown(!isShown)
          }}>total price : {props.totalPrice}$ </p>
        </div>
        <div
          style={isShown ? block : hide}
        >
          <h5>your products</h5>
          <ul>
            <li style={{ display: "flex", gap: 20 }}>
              <span>iphone</span>
              <span>500$</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
