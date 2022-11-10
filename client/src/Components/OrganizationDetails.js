import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

//TO DO: Look at profile code for this and routing, show list of events beneath org card.
// User can follow Organization

export default function OrganizationDetails() {
  const [organization, setOrganization] = useState({});
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    //GET to '/organizations/:id'
    fetch(`/organizations/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((organization) => {
          setOrganization(organization);
          setLoading(false);
        });
      } else {
        r.json().then((data) => setErrors(data.error));
      }
    });
  }, []);

  // const handleOrganizationFollow = () => {
  //   fetch(`/organization_follows`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ organization_id: id, user_id: 1 }),
  //   }).then((res) => {
  //     if (res.ok) {
  //       navigate("/users/1");
  //     } else {
  //       res
  //         .json()
  //         .then((data) =>
  //           setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
  //         );
  //     }
  //   });
  // };

  if (loading) return <h1>Loading</h1>;
  if (errors) return <h1>{errors}</h1>;

  return (
    <div>
      <h1>{organization.name}</h1>
      <div className="wrapper">
        <div>
          <p>{organization.description}</p>
          <p>{organization.announcements}</p>
          <h2>{organization.link}</h2>
          <h2>{organization.social_media}</h2>
          <ul>
            <Link to={`/events/${id}`}>
              {organization.events.map((event) => (
                <li>{event.name}</li>
              ))}{" "}
            </Link>
          </ul>
        </div>
        <img src={organization.attachment} alt={organization.name} />
      </div>
      {/* <button>
        <Link to={`/organizations/${id}/edit`}>Edit Organization</Link>
      </button> */}
      {/* <button onClick={handleOrganizationFollow}>Follow Organization</button> */}
    </div>
  );
}
