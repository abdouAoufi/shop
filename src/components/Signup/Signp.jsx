import "./root.css";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const processData = () => {
    const payload = {
      email: email,
      password: password,
    };

    fetch("http://192.168.1.34:1337/signup", {
      method: "POST",
      body: JSON.stringify(payload),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
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
    </div>
  );
}

export default Signup;
