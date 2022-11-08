import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Header from "./Header";
import About from "../Pages/About";
import SignUp from "./SignUp";
import Login from "./Login";
import Footer from "./Footer";
import Profile from "../Pages/Profile";
import OrganizationList from "./OrganizationList";
import EventList from "./EventList";

export default function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState(false);

  //Grabs user information for Global State
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        setLoggedIn(true);
        r.json().then((user) => setUser(user));
      }
      // fetchEvents();
      // fetchOrganizations();
      //autologin
      // } else {
      //   setUser(null);
      // }
    });
  }, [loggedIn]);

  if (errors) return <h1>{errors}</h1>;

  return (
    <>
      <Router>
        <Header
          user={user}
          setUser={setUser}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/signup"
              element={<SignUp setUser={setUser} setLoggedIn={setLoggedIn} />}
            />
            <Route path="login" element={<Login setUser={setUser} />} />
            <Route
              exact
              path="/profile"
              element={<Profile user={user} setUser={setUser} />}
            />
            <Route
              path="/organizations"
              element={
                <OrganizationList
                  user={user}
                  setUser={setUser}
                  setLoggedIn={setLoggedIn}
                />
              }
            />
            <Route
              path="/events"
              element={
                <EventList
                  user={user}
                  setUser={setUser}
                  setLoggedIn={setLoggedIn}
                />
              }
            />
            <Route path="/error" element={<Error />} />
            <Route path="/logout" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}
