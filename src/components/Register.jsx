import React, { useState } from "react";
import { createUser } from "../api/users";
import { useNavigate, Link } from "react-router-dom";

export default function Register({ setToken, setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createUser(username, password);
    if (!result.success) {
      setError(result.error.message);
    } else {
      const token = result.data.token;
      setCurrentUser(username);
      setToken(token);
      localStorage.setItem("token", token);
      navigate("/Profile");
    }
  };

  return (
    <div className="login">
      <h3>Register:</h3>
      <form className="authForm" onSubmit={handleSubmit}>
        <input
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {error ? <div className="error">{error}</div> : null}
      <Link className="loginHelper" to="/LogIn">
        Already have an account?
      </Link>
    </div>
  );
}
