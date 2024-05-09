import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import MyContext from "../context/MyContext";

const PrivateRoute = ({ element, ...rest }) => {
  const { authenticated } = useContext(MyContext);

  return authenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
