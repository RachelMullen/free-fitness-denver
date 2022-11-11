import React from "react";
import { Link } from "react-router-dom";

//TO DO:

export default function EventCard({ event }) {
  const { name, attachment, date, time, id } = event;

  return (
    <div>
      <Link to={`/events/${id}`}>
        <h2>{name}</h2>
        <p>
          <img src={attachment} alt={name} />
        </p>
        <p>{date}</p>
        <p>{time}</p>
        {/* <p>{event.organization}</p> */}
      </Link>
    </div>
  );
}
