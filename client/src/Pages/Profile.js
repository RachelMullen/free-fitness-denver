import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

//TO DO: Show:
//List of followed organizations and events
//List of events and organizations user owns
// Ability to edit owned organizations
// List of followed events and organizations

export default function Profile() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetch(`/users/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setLoading(false);
        });
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
  }, []);

  if (loading) return <h1>Loading</h1>;
  if (errors) return <h1>{errors}</h1>;

  const profileEdit = () => navigate(`/profile/${user.id}/`);

  return (
    <>
      <div>
        <h1>Welcome {user.name}!</h1>
        <img alt="profile_picture" src={user.profile_picture} />
        <h2>{user.email}</h2>
        <h2>{user.bio}</h2>
        <button onClick={profileEdit}>Edit Profile</button>
      </div>
    </>
  );
}
