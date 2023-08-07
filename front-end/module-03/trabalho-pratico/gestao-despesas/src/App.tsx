import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { Home } from "./pages/Home";
import LoginScreen from "./pages/LoginScreen";
import { IUser } from "./types/types";
import { getUserEndpoint } from "./server/backend";
import { authContext } from "./context/authContext";

function App() {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    getUserEndpoint().then(setUser, onSignOut);
  }, []);

  function onSignOut() {
    setUser(null);
  }

  if (user) {
    return (
      <authContext.Provider value={{ user, onSignOut }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/despesas/:datafilter" element={<Home />} />
          </Routes>
        </Router>
      </authContext.Provider>
    )
  } else {
    return (
      <LoginScreen onSignIn={setUser} />
    )
  }

}

export default App;
