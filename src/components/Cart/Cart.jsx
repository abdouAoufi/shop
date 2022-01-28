import iphone from "../../images/iphone.jpeg";
import "./root.css";

function Cart(props) {
  return (
    <div className="product">
      <img src={props.image} alt="" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        impedit maiores modi vel.
      </p>
      <button>Add to cart</button>
    </div>
  );
}
export default Cart;
