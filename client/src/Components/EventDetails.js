import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

//TO DO: User can follow Event
//Link to organizaton name for this event

export default function EventDetail({ deleteEvent }) {
  const [event, setEvent] = useState({ organization: [] });
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    //GET to '/events/:id'
    fetch(`/events/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((event) => {
          setEvent(event);
          setLoading(false);
        });
      } else {
        r.json().then((data) => setErrors(data.error));
      }
    });
  }, []);

  // function handleDelete() {
  //   //DELETE to `/organizations/${params.id}`
  //   fetch(`/events/${params.id}`, {
  //     method: "DELETE",
  //     headers: { "Content-Type": "application/json" },
  //   }).then((r) => {
  //     if (r.ok) {
  //       deleteEvent(id);
  //       navigate("/");
  //     } else {
  //       r.json().then((data) =>
  //         setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
  //       );
  //     }
  //   });
  // }

  // const handleEventFollow = () => {
  //   fetch(`/event_follows`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ event_id: id, user_id: 1 }),
  //   }).then((res) => {
  //     if (res.ok) {
  //       navigate("/users/1");
  //     } else {
  //       res
  //         .json()
  //         .then((data) =>
  //           setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
  //         );
  //     }
  //   });
  // };

  if (loading) return <h1>Loading</h1>;
  if (errors) return <h1>{errors}</h1>;

  return (
    <div>
      <h1>{event.name}</h1>
      <div className="wrapper">
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
              class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
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
        <img class="max-w-lg h-auto rounded-lg" src={event.attachment} alt={event.name} />
      </div>
      <button class="btn btn-primary">
        {/* <Link to={`/events/${id}/edit`}>Edit Event</Link> */}
      </button>
      {/* <button onClick={handleDelete}>Delete Event</button>
      <button onClick={handleEventFollow}>Follow Event</button> */}
    </div>
  );
}
