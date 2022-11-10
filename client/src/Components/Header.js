import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

//TO DO: Won't load new navigation except for on refresh.

export default function NavBar({ updateUser, loggedIn, setLoggedIn }) {
  let navigate = useNavigate();

  //Logs out current user
  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        updateUser(null);
        setLoggedIn(false);
        navigate("/");
      }
    });
  }

  //renders custom navigation
  return (
    <>
      <div className="navbar">
        <li>
          <NavLink to="/"> Home </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        {loggedIn ? (
          <div>
            <li>
              <NavLink to="/" onClick={handleLogout}>
                Logout
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/organizations">Organizations</NavLink>
            </li>
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>
          </div>
        ) : (
          <div>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign up</NavLink>
            </li>
          </div>
        )}
      </div>
    </>
  );
}
