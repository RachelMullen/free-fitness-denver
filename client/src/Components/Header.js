import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ user, setUser, updateUser }) {
  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(false);
      }
    });
  }
  return (
    <>
      <div className="navbar">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}
