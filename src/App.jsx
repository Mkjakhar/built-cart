import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <>
      <Routes>
        <Route element={<LoginPage />} path="/" />
        <Route element={<Dashboard />} path="/dashboard" />
      </Routes>
    </>
  );
}

export default App;
