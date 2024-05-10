import React, { createContext, useState } from "react";

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activeSubTab, setActiveSubTab] = useState(null);
  const [showExport, setShowExport] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  const [orderData, setOrderData] = useState(null);

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
        orderData,
        setOrderData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
