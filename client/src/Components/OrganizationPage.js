import React, { useEffect, useState } from "react";
import OrganizationCard from "./OrganizationCard";

//TO DO:

export default function OrganizationPage() {
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
