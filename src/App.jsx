import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import { ToastContainer } from "react-toastify";
import MyContext from "./components/context/MyContext";
import { fetchUserData } from "./components/utils/auth";

function App() {
  const {
    authenticated,
    setAuthenticated,
    userData,
    setOrderData,
    setUserData,
    setStatusData,
  } = useContext(MyContext);
  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      fetchUserData(setUserData, setOrderData, setStatusData);
    }
  }, []);

  useEffect(() => {
    const isRefreshToken = sessionStorage.getItem("refreshToken");
    console.log(authenticated);
    if (isRefreshToken) {
      setAuthenticated(true);
    }
  }, [authenticated]);
  console.log(userData);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {authenticated ? (
          <Route path="/dashboard" element={<Dashboard />} />
        ) : (
          <Route path="/" element={<LoginPage />} />
        )}
      </Routes>
    </>
  );
}

export default App;
