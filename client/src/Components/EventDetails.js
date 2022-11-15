import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

//TO DO: User can follow Event
//Link to organizaton name for this event

export default function EventDetail({ deleteEvent }) {
  const [event, setEvent] = useState({ organization: [] });

  const { id } = useParams();
  useEffect(() => {
    //GET to '/events/:id'
    fetch(`/events/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((event) => {
          setEvent(event);
        });
      }
    });
  }, []);

  return (
    <div class="flex justify-center flex-col flex-wrap items-center space-x-3 space-y-3 h-auto w-full">
      <div class="item w-3/4 h-32">
        <h1>{event.name}</h1>

        <div>
          <p>{event.description}</p>
          <p>{event.announcements}</p>
          <p>{event.date}</p>
          <p>{event.time}</p>
          <p>{event.location_name}</p>
          <p>
            {event.address}, {event.city}, {event.state} {event.zip}
          </p>
          <p>{event.difficulty_distance}</p>
          <p>{event.category}</p>

          <h2>
            <Link to={event.link}> Website </Link>
          </h2>
          <h2>
            <Link to={event.social_media}> Socials </Link>
          </h2>
          <ul>
            ORGANIZATION:
            <Link
              to={`/organizations/${id}/`}
              class="inline-flex items-center font-medium text-purple-600 dark:text-purple-500 hover:underline"
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
          </ul>
        </div>
        <img
          class="max-w-lg h-auto rounded-lg"
          src={event.attachment}
          alt={event.name}
        />
      </div>
      {/* <button onClick={handleEventFollow}>Follow Event</button> */}
    </div>
  );
}
