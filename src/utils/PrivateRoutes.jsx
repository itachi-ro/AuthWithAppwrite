import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const PrivateRoutes = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" />;
};

/*
In this example, the PrivateRoutes component checks if the user is authenticated using the checkAuth function. If the user is authenticated, it renders the child routes defined inside the Outlet component. Otherwise, it redirects the user to the /login page

*/
