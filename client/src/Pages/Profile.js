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
        <img
          class="w-96 h-96 rounded-full"
          alt="profile_picture"
          src={user.profile_picture}
        />
        <h2>{user.email}</h2>
        <h2>{user.bio}</h2>
        <button
          onClick={profileEdit}
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            aria-hidden="true"
            class="mr-2 -ml-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            ></path>
          </svg>
          EDIT PROFILE
        </button>
      </div>
    </>
  );
}
