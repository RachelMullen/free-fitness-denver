import React, { useEffect, useState } from "react";
import OrganizationCard from "../Components/OrganizationCard";

//TO DO:

export default function OrganizationList() {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    fetch("/organizations")
      .then((r) => r.json())
      .then((organizations) => {
        setOrganizations(organizations);
      });
  }, []);

  const orgCollection =
    organizations &&
    organizations.map((organization) => {
      return (
        <OrganizationCard key={organization.id} organization={organization} />
      );
    });

  return <ul>{orgCollection}</ul>;
}
