import React, { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);


  useEffect(() => {
    fetch(`/users/$(user.id)`).then((res) => {
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
  return (
    <>
      <div>
        <img alt="profile_picture" src={user.attachment} />
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
        <h2>{user.bio}</h2>
      </div>
    </>
  );
}
