import "./root.css"

function Signup() {
  return (
    <div className="form">
      <div>
        <h2>Sign up</h2>
        <input placeholder="Enter your email" type="email" />
        <input placeholder="Enter your password" type="password" />
        <button>Signup</button>
      </div>
    </div>
  );
}

export default Signup;
