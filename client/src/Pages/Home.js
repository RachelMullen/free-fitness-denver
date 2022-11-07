import { useState } from "react";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";

export default function Home({ onLogin, updateUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <div>THIS IS THE HOME PAGE! BIG PICTURE GOES HERE</div>
      <div>
        **FREE FITNESS.** That's what we're all about. From workout groups, to
        bike rides, hikes, to pub runs, free fitness is everywhere, especially
        in Denver. View and save your favorite opportunities and get moving!
      </div>
      <div>EVENTS NEAR YOU</div>
      <div>THIS IS WHERE I NEED TO MAP EVENT CARDS</div>
      {showLogin ? (
        <>
          <Login onLogin={onLogin} />
          <p>
            Don't have an account? &nbsp;
            <button onClick={() => setShowLogin(false)}>Sign Up</button>
          </p>
        </>
      ) : (
        <>
          <SignUp onLogin={onLogin} />
          <p>
            Already have an account? &nbsp;
            <button onClick={() => setShowLogin(true)}>Log In</button>
          </p>
        </>
      )}
    </>
  );
}
