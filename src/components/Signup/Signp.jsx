import "./root.css";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  const processData = () => {
    const payload = {
      email: email,
      password,
    };

    fetch("http://192.168.1.34:1337/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        response.json().then((data) => {
          setResponse(data.message)
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form">
      <div>
        <h2>Sign up</h2>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          placeholder="Enter your email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter your password"
          type="password"
        />
        <button
          onClick={() => {
            processData();
          }}
        >
          Signup
        </button>
      </div>
      <div>
        <p style={{ textAlign: "center" }}>{response}</p>
      </div>
    </div>
  );
}

export default Signup;
