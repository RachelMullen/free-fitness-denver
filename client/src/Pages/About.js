import React from "react";
import { Link } from "react-router-dom";
import RachelRunning from "../assets/RachelRunning.JPG";

export default function About() {
  return (
    <div class="flex flex-wrap justify-center space-x-4 h-auto w-auto">
      <div class="item w-1/4 m-3 h-auto">
        <img
          src={RachelRunning}
          class="rounded-lg shadow-lg bg-blend-lighten"
          alt="Rachel Mullen Running"
        />
      </div>
      <div class="item w-1/3 h-auto  m-3">
        <h1 class="mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl text-teal-400">
          Fitness should be free.
        </h1>
        <p class="my-6 text-xl font-normal text-gray-500">
          Hi. I'm Rachel, and running is my happy place. Running takes me to
          places of beauty and peace, connects me with people I would have never
          otherwise met, and helps me feel like no matter what else may be going
          on, when put one foot in front of the other,
          <span class="font-extrabold text-gray-900"> I'm moving foward.</span>
        </p>
        <p class="my-6 text-xl font-normal text-gray-500">
          <span class="font-extrabold text-gray-900">
            Fitness should be free.{" "}
          </span>
          For my final project at Flatiron School as a software engineering
          student, I created this one-stop shop for the groups and events in
          Denver that provide community and movement for free. These
          opportunities support access for all to the mental, emotional, and
          physical benefits of movement.{" "}
          <Link to="/signup" class="md:text-purple-700">
            Sign up
          </Link>
          or
          <Link to="/login" class="md:text-purple-700">
            log in
          </Link>
          and start moving forward.
        </p>
        <p class="my-6 text-lg font-normal text-gray-500 italic">
          Special shout-out to my friends at the November Project, who over the
          years, have passed around dozens of spreadsheets and posted about
          hundreds of free fitness opportunities. Here's to a prettier way of
          viewing all the ways to move in community!
        </p>
      </div>
    </div>
  );
}
