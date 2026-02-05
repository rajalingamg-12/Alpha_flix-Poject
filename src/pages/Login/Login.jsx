import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/home");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="login">
      <div className="login-box">
        <h1>Sign In</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign In</button>
        </form>

        <p className="signup-text">
          New to Alpha-Flix?{" "}
          <span onClick={() => navigate("/signup")}>Sign up now.</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
