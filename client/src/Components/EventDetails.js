import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
var { SocialIcon } = require("react-social-icons");

//TO DO: User can follow Event
//Link to organizaton name for this event

export default function EventDetail({ currentUser, deleteEvent }) {
  const [event, setEvent] = useState({ organization: [] });
  // const [isFollowing, setIsFollowing] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    fetch(`/events/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((event) => {
          setEvent(event);
        });
      }
    });
  }, []);

  // function handleFollow(e) {
  //   const eventFollow = {
  //     event_id: event.id,
  //     follower_id: currentUser.id,
  //   };

  return (
    <div class="flex flex-col max-w-full items-center flex-wrap">
      <div class="my-2 px-2 ">
        <div class="max-w-2xl">
          <h1 class="mb-4 p-1.5 text-2xl font-bold bg-purple-700 rounded-t-lg  text-center object-center content-center text-white">
            {event.name}
          </h1>
          <img
            src={event.attachment}
            alt={event.name}
            class="rounded-t-lg py-5"
          />
          {/* <p class="object-center items-center content-centerself-center text-center">
              <button
                class="w-full object-center items-center content-center self-center text-xl text-center text-white font-bold p-2 bg-purple-700 hover:bg-purple-800"
                onClick={handleFollow}
              >
                {isFollowing ? "FOLLOWING" : "FOLLOW"}
              </button>
            </p> */}
          <div className="">
            <div>
              {" "}
              <br />
              <p class="text-xl">
                {event.date} || {event.time}
              </p>
              <br />
              <p>{event.location_name} </p>
              <p>
                {event.address} | {event.city}, {event.state} {event.zip}
              </p>
              <br />
              <p>
                {event.difficulty_distance} || {event.category}
              </p>
              <br />
              <p class="text-lg pt-2">{event.description}</p> <br />
              <p>{event.announcements}</p>
              <br />
              <h2 class="object-center mb-7 items-center content-center self-center text-center">
                <a href={`${event.link}`} class="hover:underline">
                  Website
                </a>{" "}
              </h2>
              <h2 class="object-center mb-7 items-center content-center self-center text-center">
                {" "}
                <SocialIcon
                  url={`${event.social_media}`}
                  class="hover:underline"
                  Socials
                />
              </h2>
              <div class="flex-col flex">
                <div class="mt-4 flex max-w-sm flex-col flex-wrap object-center self-center content-center text-xl text-center items-center px-4 space-y-1 rounded-lg h-auto w-auto bg-teal-400 py-4">
                  <div class="inline-flex flex-col items-center font-medium text-white dark:text-purple-500 text-lg">
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
                    <h3 class="inline-flex items-center font-medium m p-2 text-2xl">
                      GROUP{" "}
                    </h3>{" "}
                    <div class="flex mt-5 flex-col flex-wrap items-right space-y-1 h-auto w-auto">
                      <Link
                        to={`/organizations/${event.organization.id}/`}
                        class="inline-flex items-center font-medium text-white  hover:underline"
                      >
                        {event.organization.name}
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
                    </div>
                  </div>
                  {/* <button onClick={handleEventFollow}>Follow Event</button> */}
                </div>
                <div class="inline-flex pt-5 items-center object-left text-right font-medium hover:underline text-lg">
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
                    Return to All Events
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
