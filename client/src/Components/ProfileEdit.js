import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

//TO DO:
//Get existing data to populate on page load.
//Validations causing problems (have to enter PW and Email no matter)

export default function ProfileEdit({ user, updateUser, deleteUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const params = useParams();
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
    formData.append("id", id);
    formData.append("password", password);
    formData.append("password_confirmation", passwordConfirmation);
    formData.append("bio", bio);
    formData.append("profile_picture", profilePicture);
    fetch(`/users/${params.id}`, {
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
    fetch(`/users/${params.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        deleteUser(id);
        navigate("/");
      } else {
        res
          .json()
          .then((data) =>
            setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
          );
      }
    });
  }

  return (
    <>
      <div> This is the edit profile page</div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Update Email</label>
          <input
            type="email"
            name="email"
            placeholder={user.email}
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label>Update Password</label>
          <input
            type="password"
            name="password"
            placeholder={user.password}
            defaultValue={password}
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
            defaultValue={name}
            placeholder={user.name}
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
            defaultValue={bio}
            placeholder={user.bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </p>
        <button type="submit">
          {isLoading ? "Loading..." : "Update User"}
        </button>
        {/* <button type="button" onClick={handleDelete}>
          Delete User
        </button>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))} */}
      </form>
    </>
  );
}
