
import "./root.css";

function Cart(props) {
  return (
    <div className="product">
      <img src={props.image} alt="" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
      </div>
      
      <button onClick={() => {
        props.update(props.price)
      }}>Add to cart</button>
    </div>
  );
}
export default Cart;
