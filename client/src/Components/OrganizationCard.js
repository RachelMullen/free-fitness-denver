import React from "react";
import { Link } from "react-router-dom";

export default function OrganizationCard({ organization }) {
  const { name, attachment, id } = organization;
  console.log(organization);

  return (
    <div>
      <Link to={`/organizations/${id}`}>
        <h2>{name}</h2>
        <p><img src={attachment} alt={name} /></p>
        </Link>
    </div>
  );
}
