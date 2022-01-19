import React, { useState, useEffect } from "react";

import Screen from "./app/components/Screen";
import Navigation from "./app/navigation/Navigation";
import AuthNavigation from "./app/navigation/AuthNavigation";

import AuthContext from "./app/auth/context";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Screen>
      <OfflineNotice />
      <AuthContext.Provider value={{ user, setUser }}>
        {user ? <Navigation /> : <AuthNavigation />}
      </AuthContext.Provider>
    </Screen>
  );
}
