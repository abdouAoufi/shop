import "./root.css";
import {Link} from "react-router-dom"

function Navbar(props) {
  return (
    <nav>
      <div className="inner-container">
        <h3>Shop</h3>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <p>total price : {props.totalPrice}$ </p>
      </div>
    </nav>
  );
}

export default Navbar;