import React from "react";

export default function EventFilter({ category, onCategoryChange }) {
  return (
    <div>
      <select
        name="filter"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">Filter by category</option>
        <option value="Road Running">Road Running</option>
        <option value="Trail Running">Trail Running</option>
        <option value="HIIT">HIIT</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
}
