import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

//TO DO: Look at profile code for this and routing, show list of events beneath org card.
// User can follow Organization

export default function OrganizationDetails({ currentUser }) {
  const [organization, setOrganization] = useState({ events: [] });
  const [isFollowing, setIsFollowing] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    //Get details of specific organization to display on page
    fetch(`/organizations/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((organization) => {
          setOrganization(organization);
        });
      }
    });
  }, []);

  //Get details of specific organization to display on page
  function handleFollow(e) {
    const orgFollow = { organization_id: organization.id, follower_id: currentUser.id }

    fetch("/organization_follows", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orgFollow),
    })
    .then((r) => {
     if (r.ok) {
      r.json().then((orgFollow) => {
        console.log(orgFollow);
      })
     } 
    })
  }
      //   if (r.ok) {
      //     r.json().then((following) => {
      //       setIsFollowing(true);
      //     });
      //   }
      // }
          // : fetch(`/organization_follows/${currentUser.id}`, {
          //     method: "DELETE",
          //     headers: {
          //       "Content-Type": "application/json",
          //     },
          //   }).then((r) => {
          //     setIsFollowing(false);
          //   })
          //     }


  return (
    <div class="flex flex-wrap -mx-2 overflow-hidden">
      <div class="my-2 px-2 w-1/3 overflow-hidden">
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
                    class="inline-flex items-center font-medium text-purple-600 dark:text-purple-500 hover:underline"
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
          <button onClick={handleFollow} className="button">
            {isFollowing ? "Unfollow" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
}
