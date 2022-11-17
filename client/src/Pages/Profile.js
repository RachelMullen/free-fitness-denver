import React from "react";
import { Link } from "react-router-dom";
// import NewOrganizationForm from "../Components/NewOrganizationForm";

//TO DO: Show:
//List of events and organizations user owns
// Ability to edit owned organizations
// List of followed events and organizations
//Fix refresh on render

export default function Profile({ currentUser }) {
  // console.log(currentUser.events);
  // console.log(currentUser.organizations);

  console.log(currentUser);

  //is this what is causing refresh?
  function hasAttachment() {
    const profile_picture = currentUser.profile_picture;
    const attachment = currentUser.attachment;
    if (attachment === null) {
      return (
        <img
          class="max-h-96 rounded-lg shadow-lg"
          src={profile_picture}
          alt={currentUser.name}
        />
      );
    } else {
      return (
        <img
          class="max-h-96 rounded-lg shadow-lg"
          src={attachment}
          alt={currentUser.name}
        />
      );
    }
  }
  if (!currentUser) {
    return <h1>Loading...</h1>;
  }

  return (
    <div class="flex flex-col flex-wrap items-center space-y-2 h-auto w-auto">
      <div class="flex flex-wrap justify-evenly space-x-4 h-auto w-auto">
        <div class="w-72 items-center  bg-teal-300 p-5 rounded-lg shadow-md text-center">
          <h1 class="pb-5 text-purple-700">Welcome {currentUser.name}!</h1>
          {/* <img
          class="max-h-96 rounded-lg shadow-lg"
          src={currentUser.profile_picture}
          alt={currentUser.name}
        /> */}
          {hasAttachment()}
          <div class="text-center">
            <h2 class="m-5">{currentUser.bio}</h2>
            <Link
              to={`/profile/${currentUser.id}`}
              type="button"
              class="text-white my-4 object-center bg-purple-700 hover:bg-purple-800 focus:ring-4 w-full shadow-xl justify-center focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
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
              <h2 class="px-2">EDIT PROFILE </h2>
            </Link>
          </div>
        </div>
        <div class="self-center px-2 mx-4">
          <div flex-col>
            <div>
              <div class="inline-flex items-center font-medium text-purple-600 dark:text-purple-500 text-lg">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>{" "}
                <h2 class=" text-3xl px-2 ">GROUPS </h2>
              </div>
              <div>
                <div class="inline-flex items-center font-medium hover:underline text-lg">
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <h3 class="px-2 text-xl">Groups you follow</h3>
                </div>
              </div>
            </div>
            <div>
              <div class="inline-flex items-center font-medium hover:underline text-lg">
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <h3 class="px-2 text-xl">Groups you own</h3>
              </div>
            </div>{" "}
            <div>
              <div class="inline-flex items-center font-medium hover:underline text-lg">
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <Link to="/organizations" class="text-xl px-2">
                  All Groups
                </Link>
              </div>
            </div>
            <div class="pt-10">
              <div class="inline-flex items-center font-medium text-purple-600 dark:text-purple-500  text-lg">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <h3 class="px-2 text-3xl"> EVENTS </h3>
              </div>
              <div>
                <div class="inline-flex items-center font-medium text-lg hover:underline">
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <h3 class="text-xl px-2">Events you follow</h3>
                </div>
              </div>
              <div>
                <div class="inline-flex items-center font-medium hover:underline text-lg">
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <h3 class="text-xl px-2">Events you own</h3>
                </div>
              </div>{" "}
              <div>
                <div class="inline-flex items-center font-medium hover:underline text-lg">
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <Link to="/events" class="text-xl px-2">
                    All Events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
