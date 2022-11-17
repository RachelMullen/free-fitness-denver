import React from "react";
import { Link, useNavigate } from "react-router-dom";
import FreeFitnessDenver from "../assets/Free Fitness Denver.png";

export default function Header({ setCurrentUser, loggedIn, setLoggedIn }) {
  let navigate = useNavigate();

  //Logs out current user
  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setCurrentUser(null);
        setLoggedIn(false);
        alert("Logged out successfully.");
        navigate("/");
      }
    });
  }
  
  //renders custom navigation
  return (
    <header>
      {loggedIn ? (
        <nav class="px-10 pt-6 pb-12">
          <div class="container flex flex-wrap justify-evenly items-center mx-auto">
            <div>
              <Link to="/profile">
                <img
                  src={FreeFitnessDenver}
                  class="mr-3 sm:h-14"
                  alt="Free Fitness Denver Logo"
                />
              </Link>
            </div>
            <div class="flex flex-wrap justify-end items-center space-x-4 h-auto w-auto">
              <div>
                <Link
                  to="/organizations"
                  class="font-medium block py-2 pr-6 pl-5 text-gray-700 text-xl focus:text-purple-700 md:hover:text-purple-700 md:p-0"
                >
                  GROUPS
                </Link>
              </div>
              <div>
                <Link
                  to="/events"
                  class="text-xl font-medium block py-2 pr-6 pl-5 text-gray-700 focus:text-purple-700 md:hover:text-purple-700 md:p-0"
                >
                  EVENTS
                </Link>
              </div>
              <div>
                <Link
                  to="/profile"
                  class="text-xl font-medium block py-2 pr-6 pl-5 text-gray-700 focus:text-purple-700  md:hover:text-purple-700 md:p-0"
                >
                  PROFILE
                </Link>
              </div>
            </div>
            <div>
              <Link to="/" onClick={handleLogout}>
                <button
                  type="button"
                  className="text-white shadow-xl bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-3 md:mr-0"
                >
                  LOG OUT
                </button>
              </Link>
            </div>
          </div>
        </nav>
      ) : (
        <nav class="px-10 pt-6 pb-12">
          <div class="container flex flex-wrap justify-evenly items-center mx-auto">
            <div class="flex">
              <Link to="/">
                <img
                  src={FreeFitnessDenver}
                  class="mr-3 sm:h-14"
                  alt="Free Fitness Denver Logo"
                />
              </Link>
            </div>
            <div class="flex">
              <Link to="/signup">
                <button
                  type="button"
                  class="text-white shadow-xl bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-3 md:mr-0"
                >
                  SIGN UP
                </button>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
