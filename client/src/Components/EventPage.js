import React, { useEffect, useState } from "react";
import EventCard from "../Components/EventCard";

export default function EventPage() {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState("All");
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

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  const datesToDisplay = searchedEvents.filter((event) => {
    if (selectedDate === "All") return true;
    return event.date === selectedDate;
  });

  return (
    <div class="flex flex-col flex-wrap space-y-6">
      <div class="bg-teal-400 items-center text-2xl text-white py-4 font-bold text-center">
        EVENTS
      </div>
      <div class="w-1/2 items-center self-center">
        <form>
          <div class="flex">
            <select
              class="py-1 text-lg text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
              value={selectedDate}
              name="filter"
              onChange={(e) => setSelectedDate(e.target.value)}
            >
              <option
                class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                value="All"
              >
                Filter by days of the week
              </option>
              <option
                class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                value="Sunday"
              >
                Sunday
              </option>
              <option
                class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                value="Monday"
              >
                Monday{" "}
              </option>
              <option
                class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                value="Tuesday"
              >
                Tuesday
              </option>
              <option
                class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                value="Wednesday"
              >
                Wednesday
              </option>
              <option
                class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                value="Thursday"
              >
                Thursday
              </option>{" "}
              <option
                class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                value="Friday"
              >
                Friday
              </option>
              <option
                class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                value="Saturday"
              >
                Saturday{" "}
              </option>
            </select>
            <div class="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                class="block p-2.5 w-full z-20 text-lg text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Search Events..."
                required
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
            </div>
          </div>
        </form>
      </div>
      <div class="flex flex-wrap justify-center space-y-4 space-x-4">
        {datesToDisplay.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
