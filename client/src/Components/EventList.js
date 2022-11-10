import React, { useEffect, useState } from "react";
import EventCard from "../Components/EventCard";

//TO DO:
//-Filter Categories
//-Filter Days of the week
//-Search all

export default function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events")
      .then((r) => r.json())
      .then((events) => {
        setEvents(events);
      });
  }, []);

  const eventCollection = events.map((event) => {
    return <EventCard key={event.id} event={event} />;
  });

  return (
    <div>
      Events are here
      {eventCollection}
    </div>
  );
}
