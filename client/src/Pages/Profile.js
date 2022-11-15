import React from "react";
import { useNavigate } from "react-router-dom";

//TO DO: Show:
//List of followed organizations and events
//List of events and organizations user owns
// Ability to edit owned organizations
// List of followed events and organizations

export default function Profile({ currentUser }) {
  const navigate = useNavigate();

  console.log(currentUser)
  function handleProfileEdit() {
    navigate(`/profile/${currentUser.id}/`)
  }

  return (
    <>
      <div>
        <h1>Welcome {currentUser.name}!</h1>
        <img
          class="w-96 h-96 rounded-full"
          alt="profile_picture"
          src={currentUser.profile_picture}
        />
        <h2>{currentUser.email}</h2>
        <h2>{currentUser.bio}</h2>
        <div> show User follows </div>
        <div> show organization follows</div>
        <div>create new organization</div>
        <div> Show owned organizations</div>
        <div>create new event</div>
        <div> show owned events </div>
        <button
          onClick={handleProfileEdit}
          type="button"
          class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
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