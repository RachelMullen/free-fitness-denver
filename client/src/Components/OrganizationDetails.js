import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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

  function handleFollow(e) {
    const orgFollow = {
      organization_id: organization.id,
      follower_id: currentUser.id,
    };

    fetch("/organization_follows", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orgFollow),
    }).then((r) => {
      if (r.ok) {
        r.json().then((orgFollow) => {
          console.log(orgFollow);
          setIsFollowing(true);
        });
      }
    });

    fetch(`/organization_follows/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(),
    });
  }
  // }).then((orgFollow) => {
  //   // console.log(orgFollow);
  //   setIsFollowing(false);
  // });

  return (
    <div class="flex flex-col max-w-full items-center flex-wrap">
      <div class="my-2 px-2 ">
        <div
          class="max-w-2xl
        "
        >
          <h1 class="mb-4 p-1.5 text-2xl font-bold bg-teal-400 rounded-t-lg  text-center object-center content-center text-white">
            {organization.name}
          </h1>
          <img
            src={organization.attachment}
            alt={organization.name}
            class="rounded-t-lg py-5"
          />
          <p class="object-center items-center content-centerself-center text-center">
            <button
              class="w-full object-center items-center content-center self-center text-xl text-center text-white font-bold p-2 bg-teal-400 hover:bg-teal-500"
              onClick={handleFollow}
            >
              {isFollowing ? "UNFOLLOW" : "FOLLOW"}
            </button>
          </p>
          <div className="">
            <div>
              <p class="text-lg pt-5">{organization.description}</p>
              <br />
              <p>{organization.announcements}</p>
              <br />
              <h2 class="object-center mb-7 items-center content-center self-center text-center">
                <a href={`${organization.link}`} class="hover:underline">
                  Website
                </a>{" "}
                | |
                <a
                  href={`${organization.social_media}`}
                  class="hover:underline"
                >
                  Socials
                </a>
              </h2>
              <div class="flex-col flex">
                <div class="mt-4 flex max-w-sm flex-col flex-wrap object-center self-center content-center text-xl text-center items-center px-4 space-y-1 rounded-lg h-auto w-auto bg-purple-700 py-4">
                  <div class="inline-flex flex-col items-center font-medium text-white dark:text-purple-500 text-lg">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <h3 class="inline-flex items-center font-medium m p-2 text-2xl">
                      EVENTS
                    </h3>
                    <div class="flex mt-5 flex-col flex-wrap items-right space-y-1 h-auto w-auto">
                      {organization.events.map((event) => (
                        <Link
                          to={`/events/${id}/`}
                          class="inline-flex items-center font-medium text-white  hover:underline"
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
                    </div>
                  </div>
                </div>
                <div class="inline-flex pt-5 items-center object-left text-right font-medium hover:underline text-lg">
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <Link to="/organizations" class="text-xl px-2">
                    Return to All Groups
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
