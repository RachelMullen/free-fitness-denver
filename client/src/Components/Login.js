import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//TO DO:

export default function Login({ updateUser, setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  //Logs in User
  function handleSubmit(e) {
    let user = {
      email: email,
      password: password,
    };
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => updateUser(user));
        setLoggedIn(true);
        navigate(`/profile`);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Email</label>
          <input
            type="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <div>
          <h4>Don't have an account?</h4>
          <Link to="/signup">Signup</Link>
        </div>
        <button type="submit">{isLoading ? "Loading..." : "Login"}</button>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </form>
    </>
  );
}
