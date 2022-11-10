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
import EventDetails from "./EventList";
import OrganizationDetails from "./EventList";
import ProfileEdit from "./ProfileEdit";

//TO DO:

export default function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState(false);

  //Grabs user information for Global State
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        setLoggedIn(true);
        r.json().then((user) => updateUser(user));
      }
      // fetchEvents();
      // fetchOrganizations();
      //autologin
      // } else {
      //   setUser(null);
      // }
    });
  }, [loggedIn]);

  const deleteUser = (id) => setUser((user) => user.filter((p) => p.id !== id));
  const updateUser = (user) => setUser(user);

  if (errors) return <h1>{errors}</h1>;

  return (
    <>
      <Router>
        <Header
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          updateUser={updateUser}
        />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/signup"
              element={
                <SignUp updateUser={updateUser} setLoggedIn={setLoggedIn} />
              }
            />
            <Route path="login" element={<Login updateUser={updateUser} />} />
            <Route
              exact
              path="/profile"
              element={<Profile updateUser={updateUser} />}
            />
            <Route path="/organizations" element={<OrganizationList />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route
              path="/organizations/:id"
              element={<OrganizationDetails />}
            />
            <Route
              path="/profile/:id"
              element={
                <ProfileEdit
                  user={user}
                  deleteUser={deleteUser}
                  updateUser={updateUser}
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
