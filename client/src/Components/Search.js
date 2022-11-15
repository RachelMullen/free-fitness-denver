import React from "react";

export default function Search({ searchTerm, onSearchChange }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Events:</label>
      <input
        type="text"
        id="search"
        placeholder="Type an event to search..."
        onChange={(e) => onSearchChange(e.target.value)}
        value={searchTerm}
      />
    </div>
  );
}