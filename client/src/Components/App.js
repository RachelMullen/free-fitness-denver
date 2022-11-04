import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Header from "./Header";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <BrowserRouter>
            <Header user={user} />
      <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
