import iphone from "../../images/iphone.jpeg";
import "./root.css"

function Cart() {
  return (
    <div>
      <img
        src={iphone}
        alt=""
      />
      <div>
        <h3>Product title</h3>
        <p>1200$</p>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        impedit maiores modi vel.
      </p>
    </div>
  );
}
