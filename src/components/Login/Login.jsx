import "./root.css"

function Login() {
  return (
    <div className="form">
      <div>
        <h2>Login </h2>
        <input placeholder="Enter your email" type="email" />
        <input placeholder="Enter your password" type="password" />
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;
