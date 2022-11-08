import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Header from "./Header";
import About from "../Pages/About";
import SignUp from "./SignUp";
import Login from "./Login";
import Profile from "../Pages/Profile";
// import EventForm from "./components/ProductionForm";
// import EditEventForm from "./components/EditProductionForm";
// import EventDetail from "./components/ProductionDetail";
// import OrganizationForm from "./components/ProductionForm";
// import EditOrganizationForm from "./components/EditProductionForm";
// import OrganizationDetail from "./components/ProductionDetail";
import Footer from "./Footer";

export default function App() {
  const [currentUser, setCurrentUser] = useState(false);
  // const [events, setEvents] = useState([]);
  // const [organizations, setOrganizations] = useState([]);
  const [errors, setErrors] = useState(false);

  //Grabs user information for Global State
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => updateUser(user));
        // fetchEvents();
        // fetchOrganizations();
        //autologin
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  // const fetchEvents = () => {
  //   fetch("/events").then((r) => {
  //     if (r.ok) {
  //       r.json().then(setEvents);
  //     } else {
  //       r.json().then((data) => setErrors(data.error));
  //     }
  //   });
  // };

  // const addEvent = (event) => setEvents((current) => [...current, event]);

  // const updateEvent = (updatedEvent) =>
  //   setEvents((current) => {
  //     return current.map((event) => {
  //       if (event.id === updatedEvent.id) {
  //         return updatedEvent;
  //       } else {
  //         return event;
  //       }
  //     });
  //   });

  // const deleteEvent = (id) =>
  //   setEvents((current) => current.filter((p) => p.id !== id));

  // const fetchOrganizations = () => {
  //   fetch("/organizations").then((r) => {
  //     if (r.ok) {
  //       r.json().then(setOrganizations);
  //     } else {
  //       r.json().then((data) => setErrors(data.error));
  //     }
  //   });
  // };

  // const addOrganization = (organization) =>
  //   setOrganizations((current) => [...current, organization]);

  // const updateOrganization = (updatedOrganization) =>
  //   setOrganizations((current) => {
  //     return current.map((organization) => {
  //       if (organization.id === updatedOrganization.id) {
  //         return updatedOrganization;
  //       } else {
  //         return organization;
  //       }
  //     });
  //   });

  // const deleteOrganization = (id) =>
  //   setOrganizations((current) => current.filter((p) => p.id !== id));

  const updateUser = (user) => setCurrentUser(user);

  if (errors) return <h1>{errors}</h1>;

  return (
    <Router>
      <>
        <Header updateUser={updateUser} />
        {!currentUser ? (
          <Login error={"please login"} updateUser={updateUser} />
        ) : (
          <Routes>
            <Route
              exact
              path="/"
              element={<Home />}
            />
            <Route path="/about" element={<About />} />
            {/* <Route path="/signup" element={<SignUp />} /> */}
            <Route path="/login" element={<Login updateUser={updateUser} />} />
            {/* <Route
              path="/profile"
              element={<Profile updateUser={updateUser} />}
            /> */}
            <Route path="/error" element={<Error />} />
          </Routes>
        )}
        <Footer />
      </>
    </Router>
  );
}
