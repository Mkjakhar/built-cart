import React, { createContext, useState } from "react";

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activeSubTab, setActiveSubTab] = useState(null);
  const [showExport, setShowExport] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  return (
    <MyContext.Provider
      value={{
        activeSubTab,
        setActiveSubTab,
        showExport,
        setShowExport,
        activeTab,
        setActiveTab,
        authenticated,
        setAuthenticated,
        userData,
        setUserData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
