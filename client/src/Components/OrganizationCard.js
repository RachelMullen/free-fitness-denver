// import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";

export default function OrganizationCard({ organization }) {
  const { name, attachment, id, events } = organization;

  return (
    <div class="w-1/4 content-center  text-center object-center items-center">
      <div class="text-center object-center items-center content-center">
        <Link
          to={`/organizations/${id}`}
          class="block max-w-sm bg-white rounded-lg border border-gray-200 shadow-xl-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div class="">
            {" "}
            <img
              src={attachment}
              alt={name}
              class="rounded-t-lg max-w-full place-self-center self-center content-center"
            />
            <h5 class="mb-4 p-1.5 text-2xl font-bold tracking-tight bg-teal-400 text-white">
              {name}
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {[events.name]}
            </p>
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
              </svg>
              <h2 class="py-4 text-xl px-2 ">LEARN MORE </h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
