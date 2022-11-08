import React from "react";
import { Link } from "react-router-dom";
// import OrganizationList from "../Components/OrganizationList";
// import EventList from "../Components/EventList";

export default function Home() {
  return (
    <>
      <div>THIS IS THE HOME PAGE! BIG PICTURE GOES HERE</div>
      <div>
        **FREE FITNESS.** That's what we're all about. From workout groups, to
        bike rides, hikes, to pub runs, free fitness is everywhere, especially
        in Denver. View and save your favorite opportunities and get moving!
      </div>
      {/* <div><EventList events={events} /></div>
      <div><OrganizationList organizations={organizations}/></div> */}
      <div>THIS IS WHERE I NEED TO MAP EVENT CARDS</div>
      <p>
        <Link to="/signup">Signup</Link>
      </p>
      <p>
        Already have an account?
        <Link to="/login">Login</Link>
      </p>
    </>
  );
}
