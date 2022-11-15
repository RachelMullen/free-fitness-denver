// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import EventCard from "./Components/EventCard";

//TO DO:

export default function OrganizationCard({ organization }) {
  const { name, attachment, id, events } = organization;

  return (
    <Link
      to={`/organizations/${id}`}
      class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div class="max-w-sm">
        <img src={attachment} alt={name} class="rounded-t-lg" />
        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {[events.name]}
          </p>
          {/* <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"> */}
          {/* Read more
          <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
          {/* </a> */}
        </div>
      </div>
    </Link>
  );
}
