import React from "react";
import { Redirect, Route } from "react-router-dom";

function AdminProtect({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("currentUser");

  // console.log('this', isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default AdminProtect;
