import React, { createContext, useState } from "react";

const MyContext = createContext();
export const MyContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activeSubTab, setActiveSubTab] = useState(null);
  const [showExport, setShowExport] = useState(false);
  return (
    <MyContext.Provider
      value={{
        activeSubTab,
        setActiveSubTab,
        showExport,
        setShowExport,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
