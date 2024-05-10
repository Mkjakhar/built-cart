import React, { useContext, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import { ToastContainer } from "react-toastify";
import MyContext from "./components/context/MyContext";

function App() {
  const { authenticated, setAuthenticated, userData } = useContext(MyContext);
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
        <Route element={<LoginPage />} path="/" />
        <Route
          path="/dashboard"
          element={authenticated ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
