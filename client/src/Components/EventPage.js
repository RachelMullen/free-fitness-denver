import React, { useEffect, useState } from "react";
import Search from "../Components/Search";
import EventCard from "../Components/EventCard";
import EventFilter from "../Components/EventFilter";

//TO DO:
//-Filter Categories
//-Filter Days of the week
//-Search all

export default function EventPage() {
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/events").then((r) =>
      r.json().then((events) => {
        if (r.ok) setEvents(events);
      })
    );
  }, []);

  const displayedEvents = events.filter((event) => {
    return event.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const eventsToDisplay = displayedEvents.filter((event) => {
    if (selectedCategory === "All") return true;

    return event.category === selectedCategory;
  });

  return (
    <div>
      <div>
        <EventFilter
          category={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>
      <ul>
        {eventsToDisplay.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ul>
    </div>
  );
}
