import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

//TO DO: User can follow Event
//Link to organizaton name for this event

export default function EventDetail({ deleteEvent }) {
  const [event, setEvent] = useState({organization: []});
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);

  const {id} = useParams();
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
          <p>{event.address}, {event.city}, {event.state} {event.zip}</p>
          <p>{event.difficulty_distance}</p>
          <p>{event.category}</p>

          <h2><Link to={event.link}> Website </Link></h2>
          <h2><Link to={event.social_media}> Socials </Link></h2>
          <ul>
            ORGANIZATION:<Link to={`/organizations/${id}/`}>{event.organization.name}</Link>
          </ul>
        </div>
        <img src={event.attachment} alt={event.name} />
      </div>
      <button>
        {/* <Link to={`/events/${id}/edit`}>Edit Event</Link> */}
      </button>
      {/* <button onClick={handleDelete}>Delete Event</button>
      <button onClick={handleEventFollow}>Follow Event</button> */}
    </div>
  );
}
