import "./root.css"

function Navbar(props) {
  return (
    <nav>
      <div className="inner-container">
        <h3>Shop</h3>
        <p>total price : {props.totalPrice}$ </p>
      </div>
    </nav>
  );
}

export default Navbar;