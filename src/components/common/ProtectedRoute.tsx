import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authActions, AuthState } from "../../store/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../store";
import axios from "axios";
import MainLayout from "../MainLayout";
import apiClient from "../../services/api-client";

const ProtectedRoute = () => {
  console.log("PROTETECTED ROUTUTTTTTTTTTTTTTTTTTEEEEEEEEEEEEEEEEEEEEEEE");
  const dispatch = useDispatch();
  const { isAuthenticated, authCheckComplete, sessionExpired } = useSelector(
    (state: ReduxState) => state.auth
  );

  useEffect(() => {
    console.log("third, inside UseEffect");
    if (!authCheckComplete) {
      console.log("fourth, inside if condition");
      apiClient
        .get("/admin/me", { withCredentials: true })
        .then((res) => {
          dispatch(authActions.setIsAuthenticated(true));
          dispatch(authActions.setAdmin({ name: res.data.admin.name }));
          console.log("fifth,success", res.data);
        })
        .catch((error) => {
          console.log("fifth,error", error.response.data);
          dispatch(authActions.setIsAuthenticated(false));
        })
        .finally(() => dispatch(authActions.authCheckComplete()));
    }
  }, []);

  if (!authCheckComplete) {
    console.log("second");
    return <p>Loading.....</p>;
  }
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (sessionExpired) {
    return <Navigate to="/expired-page" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;

// Currently lets go with this setup for protecting routes, later if required we can implement Context API.
