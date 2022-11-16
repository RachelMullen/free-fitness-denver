import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import NewOrganizationForm from "../Components/NewOrganizationForm";

//TO DO: Show:
//List of followed organizations and events
//List of events and organizations user owns
// Ability to edit owned organizations
// List of followed events and organizations
//Fix refresh on render

export default function Profile({ currentUser }) {
  const navigate = useNavigate();
  const [organizations, setOrganizations] = useState({events: []});

  useEffect(() => {
    fetch("/organizations")
      .then((res) => res.json())
      .then((organizations) => {
        setOrganizations(organizations);
      });
  }, []);
  //want profile/userid/organizations????
  //Need index for user showing organizations as organizer?

  function handleProfileEdit() {
    navigate(`/profile/${currentUser.id}/`);
  }

  // let organizationsArr = currentUser.organizations.map((organization) => {
  //   return (
  //     <div>
  //       {organization}
  //     </div>
  //   )
  // })

  console.log(currentUser.events);
  console.log(currentUser.organizations);
  console.log(currentUser);

  const profile_picture = currentUser.profile_picture;
  const attachment = currentUser.attachment;

  //is this what is causing refresh?
  function hasAttachment() {
    if (attachment === null) {
      return <img src={profile_picture} alt={currentUser.name} />;
    } else {
      return <img src={attachment} alt={currentUser.name} />;
    }
  }

  return (
    <div class="flex flex-col flex-wrap items-center space-y-2 h-auto w-auto">
      <div class="flex flex-wrap justify-center space-x-4 h-auto w-auto">
        <div>
          <h1>Welcome {currentUser.name}!</h1>
          {hasAttachment()}
          <h2>{currentUser.email}</h2>
          <h2>{currentUser.bio}</h2>
          <button
            onClick={handleProfileEdit}
            type="button"
            class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
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
        <div>
          <p> show event follows </p>
          <p> show organization follows</p>

          <p>create new organization</p>
          <div>{[organizations.name]}</div>
          <p>create new event</p>
          <p> show owned events </p>
        </div>
      </div>
    </div>
  );
}
