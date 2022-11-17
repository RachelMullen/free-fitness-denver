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
import OrganizationPage from "./OrganizationPage";
import EventPage from "./EventPage";
import EventDetails from "./EventDetails";
import OrganizationDetails from "./OrganizationDetails";
import ProfileEdit from "./ProfileEdit";
import NewOrganizationForm from "./NewOrganizationForm";


export default function App() {
  const [currentUser, setCurrentUser] = useState(false); //or false?
  const [loggedIn, setLoggedIn] = useState(false);

  //Grabs user information for authentication and authorization
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      }
    });
  }, [loggedIn]);

  console.log(loggedIn);

  // const deleteUser = (id) => setCurrentUser((current) => current.filter((p) => p.id !== id));

  return (
    <React.Fragment>
      <Router>
        <Header
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          setCurrentUser={setCurrentUser}
        />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/signup"
            element={
              <SignUp
                setCurrentUser={setCurrentUser}
                setLoggedIn={setLoggedIn}
              />
            }
          />
          <Route
            path="login"
            element={
              <Login
                setCurrentUser={setCurrentUser}
                setLoggedIn={setLoggedIn}
              />
            }
          />
          {currentUser && (
            <Route
              path="/profile"
              element={<Profile currentUser={currentUser} />}
            />
          )}
          <Route
            path="/profile"
            element={<Profile currentUser={currentUser} />}
          />
          <Route
            exact
            path="/organizations"
            element={
              <OrganizationPage
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/organizations/:id"
            element={
              <OrganizationDetails
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
                    <Route
            exact
            path="/organizations/new"
            element={
              <NewOrganizationForm
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/events"
            element={
              <EventPage
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/events/:id"
            element={
              <EventDetails
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/profile/:id"
            element={
              <ProfileEdit
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route path="/error" element={<Error />} />
          <Route path="/logout" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}
