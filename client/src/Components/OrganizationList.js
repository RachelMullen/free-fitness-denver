import React, { useEffect, useState } from "react";
import OrganizationCard from "../Components/OrganizationCard";

export default function OrganizationList() {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    fetch("/organizations")
      .then((r) => r.json())
      .then((organizations) => {
        setOrganizations(organizations);
        console.log(organizations);
      });
  }, []);

  const orgCollection = organizations.map((organization) => {
    return (
      <OrganizationCard key={organization.id} organization={organization} />
    );
  });

  console.log(organizations);
  return (
    <div>
      Organizations are here
      {orgCollection}
    </div>
  );
}
