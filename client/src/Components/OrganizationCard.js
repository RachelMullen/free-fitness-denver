import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import EventCard from "./Components/EventCard";

//TO DO:

export default function OrganizationCard({ organization }) {
  const { name, attachment, id } = organization;

  return (
    <div>
      <Link to={`/organizations/${id}`}>
        <h2>{name}</h2>
        <p>
          <img src={attachment} alt={name} />
          {/* {organization.events} */}
        </p>
      </Link>
    </div>
  );
}
