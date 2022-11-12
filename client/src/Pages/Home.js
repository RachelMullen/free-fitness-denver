import React from "react";
import { Link } from "react-router-dom";
// import Button from '@mui/material/Button';

//TO DO: Map sample of events and organizations

export default function Home() {
  return (
    <>
      <div>THIS IS THE HOME PAGE! BIG PICTURE GOES HERE</div>
      <p>
        **FREE FITNESS.** That's what we're all about. From workout groups, to
        bike rides, hikes, to pub runs, free fitness is everywhere, especially
        in Denver. View and save your favorite opportunities and get moving!
      </p>
      <p>THIS IS WHERE I want TO MAP EVENT & ORGANIZATION CARDS</p>
      <p>
        <Link to="/signup">Signup</Link>
      </p>
      <p>
        Already have an account?
        <Link to="/login">Login</Link>
        {/* <Button></Button> */}
      </p>
    </>
  );
}
