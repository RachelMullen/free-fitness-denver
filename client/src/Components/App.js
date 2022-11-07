import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Header from "./Header";
import About from "../Pages/About";
import SignUp from "./SignUp";
import Login from "./Login";
// import Footer from "./Footer";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home user={user} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/signup"
            element={<SignUp user={user} setUser={setUser} />}
          />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route path="/error" element={<Error />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}
