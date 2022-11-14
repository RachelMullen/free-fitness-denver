import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

//TO DO: Look at profile code for this and routing, show list of events beneath org card.
// User can follow Organization

export default function OrganizationDetails() {
  const [organization, setOrganization] = useState({ events: [] });
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
    <div class="max-w-sm">
      <img
        src={organization.attachment}
        alt={organization.name}
        class="rounded-t-lg"
      />

      <h1>{organization.name}</h1>
      <div className="wrapper">
        <div>
          <p>{organization.description}</p>
          <p>{organization.announcements}</p>
          <h2>
            <Link to={organization.link}> Website</Link>
          </h2>
          <h2>
            <Link to={organization.social_media}>Socials</Link>
          </h2>
          <ul>
            EVENTS:
            {organization.events.map((event) => (
              <Link
                to={`/events/${id}/`}
                class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                {event.name}
                <svg
                  aria-hidden="true"
                  class="ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            ))}
          </ul>
        </div>
        <img
          class="max-w-lg h-auto rounded-lg"
          src={organization.attachment}
          alt={organization.name}
        />
      </div>
      {/* <button>
        <Link to={`/organizations/${id}/edit`}>Edit Organization</Link>
      </button> */}
      {/* <button onClick={handleOrganizationFollow}>Follow Organization</button> */}
    </div>
  );
}
