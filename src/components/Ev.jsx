import React, { useState, useEffect } from "react";
import axios from "axios";

function DashboardLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://v3h2dw9k-8002.inc1.devtunnels.ms/superadmin/dashboard-login/",
        {
          username,
          password,
        }
      );

      const successMessage = response.data.message;
      console.log(successMessage);

      setUsername("");
      setPassword("");
      setError(null);
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <h2>Dashboard Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default DashboardLogin;
