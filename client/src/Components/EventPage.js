import React, { useEffect, useState } from "react";
import EventSearch from "./EventSearch";
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

  const searchedEvents = events.filter((event) => {
    return event.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const categoriesToDisplay = searchedEvents.filter((event) => {
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
        <EventSearch searchTerm={searchTerm} onSearchChange={setSearchTerm}           category={selectedCategory}
          onCategoryChange={handleCategoryChange}/>
      </div>
      <ul>
        {categoriesToDisplay.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ul>
    </div>
  );
}



