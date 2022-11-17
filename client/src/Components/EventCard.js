import React from "react";
import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  const { name, attachment, date, time, id } = event;

  return (
    <div class="w-1/4 content-center  text-center object-center items-center">
      <div class="text-center object-center items-center content-center">
        <Link
          to={`/events/${id}`}
          class="block max-w-sm bg-white rounded-lg border border-gray-200 shadow-md-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div class="">
            <img src={attachment} alt={name} class="rounded-t-lg" />{" "}
            <div class="">
              <h5 class="mb-2 p-4 text-2xl font-bold bg-purple-700 text-white">
                {name}
              </h5>
              <p class="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">
                {date}
              </p>
              <p class="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">
                {time}
              </p>
              <div class="inline-flex items-center font-medium text-teal-400 dark:text-purple-500 text-lg">
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
                <h2 class="py-4 t text-xl px-2 ">LEARN MORE </h2>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
