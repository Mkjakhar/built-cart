import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import { ToastContainer } from "react-toastify";
import MyContext from "./components/context/MyContext";
// import PrivateRoute from "./components/common/PrivateRoute";

function App() {
  const { authenticated } = useContext(MyContext);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<LoginPage />} path="/" />
        {/* <PrivateRoute path="/dashboard" element={<Dashboard />} /> */}
        <Route
          path="/dashboard"
          element={authenticated ? <Dashboard /> : <Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
}

export default App;
