import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ updateUser }) {
  //Logs out current user
  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        updateUser(false);
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
        {/* <li>
          <Link to="/signup">Sign Up</Link>
        </li> */}
        <li>
          <Link to="/login">Log In</Link>
        </li>
        {/* <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/profile/:id">Profile</Link>
        </li> */}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}
