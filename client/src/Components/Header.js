// import { Navigate } from 'react-router-dom';
import { useState } from 'react';

export default function Logout ({ user, setUser }) {
    const [ isLogout , setIsLogout ] = useState(false);

    function handleLogout() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
            setIsLogout(true);
          }
        });
      }

    return (
        <>
            {/* FORWARD PATH */}
            {/* { isLogout ? <Navigate to="/" /> : null} */}

            <button onClick={handleLogout}>Log Out</button>
        </>
    )
}