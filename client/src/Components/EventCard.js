import React from "react";
import { Link } from "react-router-dom";

//TO DO:

export default function EventCard({ event }) {
  const { name, attachment, date, time, id, organization_id } = event;

  return (
    <div>
      <Link to={`/events/${id}`}>
        <h2>{event.name}</h2>
        <p>
          <img src={attachment} alt={name} />
        </p>
        <p>{date}</p>
        <p>{time}</p>
        <p>{organization_id}</p>
        {/* {event.organization} */}
      </Link>
    </div>
  );
}
