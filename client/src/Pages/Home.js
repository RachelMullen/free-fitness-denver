import React from "react";
import { Link } from "react-router-dom";
import NP from "../assets/NP.jpg";

export default function Home() {
  return (
    <div class="flex flex-col flex-wrap justify-evenly items-center space-y-3 h-auto">
      <img
        class="max-h-96 rounded-lg shadow-lg "
        src={NP}
        alt="People running from November Project"
      ></img>
      <h1 class="m-6 p-4 text-4xl font-extrabold leading-none md:text-5xl lg:text-6xl text-purple-600 dark:text-purple-500">
        Free Fitness.
        <span class="text-gray-900  dark:text-white px-2">
          It's what we're all about.
        </span>
      </h1>
      <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        From workout groups, to bike rides, hikes, to pub runs, free fitness is
        everywhere, especially in Denver.
      </p>
      <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        View and save your favorite opportunities and get moving with Free
        Fitness Denver!
      </p>
      <p>
        <Link
          to="/signup"
          class="m-3 inline-flex justify-center items-center py-3 px-5 text-lg font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900"
        >
          SIGN UP
          <svg
            class="ml-2 -mr-1 w-5 h-5"
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
        </Link>
      </p>
      <div class="text-gray-500 text-center">
        <p class="italic">Already have an account?</p>
        <p>
          <Link
            to="/login"
            class="inline-flex flex-wrap items-center font-medium text-purple-600 dark:text-purple-500 hover:underline text-lg"
          >
            LOG IN
            <svg
              aria-hidden="true"
              class="ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </p>
      </div>
    </div>
  );
}
