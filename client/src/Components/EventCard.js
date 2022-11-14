import React from "react";
import { Link } from "react-router-dom";

//TO DO:

export default function EventCard({ event }) {
  const { name, attachment, date, time, id } = event;

  return (
    <Link
      to={`/events/${id}`}
      class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div class="max-w-sm">
        <img src={attachment} alt={name} class="rounded-t-lg" />
        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {date}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {time}
          </p>
          {/* <p>{event.organization}</p> */}
        </div>
      </div>
    </Link>
  );
}
