import React, { useState } from "react";
import  { useNavigate } from 'react-router-dom'

export default function SignUp({ setUser, setLoggedIn }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    attachement: "",
    bio: "",
  });
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const { name, email, password, password_confirmation, attachment, bio } = formData;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  //Signs up new user
  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((formData) =>
          setUser(formData));
          setLoggedIn(formData);
        navigate(`/profile`)
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <div> This is the signup page</div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Email</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleChange}
            autoComplete="current-password"
          />
        </p>
        <p>
          <label>Password Confirmation</label>
        </p>
        <p>
          <input
            type="password"
            id="password_confirmation"
            value={password_confirmation}
            onChange={handleChange}
            autoComplete="current-password"
          />
        </p>
        <p>
          <label>Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Profile Image</label>
          <input
            type="text"
            id="attachement"
            value={attachment}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Bio</label>
          <input
            type="text"
            id="bio"
            value={bio}
            onChange={handleChange}
          />
        </p>
        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </form>
    </>
  );
}
