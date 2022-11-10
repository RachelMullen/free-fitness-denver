import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp({ setUser, setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  //Signs up new user
  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    formData.append("password", password);
    formData.append("password_confirmation", passwordConfirmation);
    formData.append("bio", bio);
    formData.append("profile_picture", profilePicture);
    fetch("/signup", {
      method: "POST",
      body: formData,
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then(setUser);
        setLoggedIn(true);
        navigate(`/profile`);
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
            placeholder="email"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <label>Password Confirmation</label>
        </p>
        <p>
          <input
            type="password"
            placeholder="password_confirmation"
            defaultValue={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </p>
        <p>
          <label>Name</label>
          <input
            type="text"
            placeholder="name"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label>Bio</label>
          <input
            type="text"
            placeholder="bio"
            defaultValue={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </p>
        <p>
          <label>Profile Picture</label>
          <input
            type="file"
            placeholder="upload photo"
            accept="image/*"
            onChange={(e) => setProfilePicture(e.target.files[0])}
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
