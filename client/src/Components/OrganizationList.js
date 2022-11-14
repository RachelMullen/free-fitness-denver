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

  return <div class="flex flex-wrap -mx-2 overflow-hidden">

  <div class="my-2 px-2 w-1/3 overflow-hidden">
{orgCollection}  </div>
</div>;
}


