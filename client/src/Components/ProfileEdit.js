import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//TO DO:

export default function ProfileEdit({ user, updateUser, deleteUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [id, setId] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();
  // useEffect(() => {
  //   fetch(`/users/${id}`)
  //     .then((res) => res.json())
  //     .then(user);
  // }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    // formData.append("id", id);
    formData.append("password", password);
    formData.append("password_confirmation", passwordConfirmation);
    formData.append("bio", bio);
    formData.append("profile_picture", profilePicture);
    fetch(`/profile/${id}`, {
      method: "PATCH",
      body: formData,
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then(updateUser);
        navigate(`/profile`);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


  function handleDelete() {
    fetch(`/profile/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((r) => {
      if (r.ok) {
        deleteUser(user.id);
        navigate("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Update Email</label>
          <input
            type="email"
            name="email"
            // placeholder={user.email}
            defaultValue={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label>Update Password</label>
          <input
            type="password"
            name="password"
            // placeholder={user.password}
            defaultValue={user.password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <label>Confirm Password Update</label>
        </p>
        <p>
          <input
            type="password"
            name="password_confirmation"
            placeholder={user.password_confirmation}
            defaultValue={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </p>
        <p>
          <label>Update Name</label>
          <input
            type="text"
            name="name"
            defaultValue={user.name}
            // placeholder={user.name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label>Update Profile Image</label>
          <input
            type="file"
            placeholder="upload photo"
            accept="image/*"
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
        </p>
        <p>
          <label>Update Bio</label>
          <input
            type="text"
            name="bio"
            defaultValue={user.bio}
            // placeholder={user.bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </p>
        <button type="submit">
          {isLoading ? "Loading..." : "Update User"}
        </button>
        <button type="button" onClick={handleDelete}>
          Delete User
        </button>
        {/* {errors.map((err) => (
          <error key={err}>{err}</error>
        ))} */}
      </form>
    </>
  );
}
