import "./root.css";
import { useState, useEffect } from "react";
import { useNavigate , Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged");
    if(isLogged === "true"){
      navigate("/")
    }
  }, []);

  const processData = () => {
    const payload = {
      email: email,
      password,
    };

    fetch("http://192.168.1.34:1337/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        response.json().then((data) => {
          setResponse(data.message);
          if (response.status === 201) {
            localStorage.setItem("isLogged", true);
            localStorage.setItem("email", email);
            setTimeout(() => {
              navigate("/");
            }, 1500);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form">
      <div>
        <h2>Log in</h2>
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
          Login
        </button>
      </div>
      <div>
        <p style={{ textAlign: "center" }}>{response}</p>
      </div>
      <Link to="/signup">You can create account here</Link>
    </div>
  );
}

export default Login;
