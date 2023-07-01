import React, { useState } from "react";
import { loginUser } from "../api/users";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setToken, setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await loginUser(username, password);
    if (!result.success) {
      setError(result.error.message);
    } else {
      localStorage.setItem("token", result.data.token);
      setToken(result.data.token);
      setCurrentUser(username);
      navigate("/Profile");
    }
  };

  return (
    <div className="login">
      <h3>Log In</h3>
      <form className="authForm" onSubmit={handleSubmit}>
        <input
          value={username}
          placeholder="username*"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          value={password}
          placeholder="password*"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
      {error ? <div className="error">{error}</div> : null}
      <Link className="loginHelper" to="/Register">
        Don't have an account?
      </Link>
    </div>
  );
}
