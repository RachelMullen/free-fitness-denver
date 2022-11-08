import React, { useEffect, useState } from "react";
import EventCard from "../Components/EventCard";

export default function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events")
      .then((r) => r.json())
      .then((events) => {
        setEvents(events);
        console.log(events);
      });
  }, []);

  const eventCollection = events.map((event) => {
         return (
                <EventCard key={event.id} event={event} />
         );
  });

  console.log(events);
  return (
    <div>
      Events are here
      {eventCollection}
    </div>
  );
}
