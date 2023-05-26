import React, { useState } from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { signup, error, isPending } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(user);

    await signup(user);

  };
  return (
    <div className="signup">
      {error && <div>{error}</div>}
      {isPending && (
        <div>
          <h2>Loading...</h2>
        </div>
      )}
      {!isPending && (
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Signup</h2>
          <div className="form-group">
            <label for="username">Username</label>
            <input
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  username: e.target.value,
                }))
              }
              type="text"
              id="username"
              name="username"
              required
              value={user.username}
            />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
              type="email"
              id="email"
              name="email"
              required
              value={user.email}
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
              type="password"
              id="password"
              name="password"
              required
              value={user.password}
            />
          </div>
          <div className="form-link">
            <Link to="/login">Already have an account?</Link>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
};

export default Signup;
