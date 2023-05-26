import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { useAuthContext } from "../../hooks/useAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {user} = useAuthContext();

  const { login, isPending, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);

    await login(email, password);
 
  };
  return (
    <div className="login">
      {error && <div>{error}</div>}
      {isPending && <h1>Logging in...</h1>}
      {!isPending && (
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <div className="form-link">
            <Link to="/signup">Create a new account</Link>
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
