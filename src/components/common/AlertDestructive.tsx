import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "../ui/button";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions, AuthState } from "@/store/AuthSlice";
import { ReduxState } from "@/store";

export function AlertDestructive() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state: ReduxState) => state.auth);
  const handleLogin = () => {
    dispatch(authActions.setSessionExpired(false));
    dispatch(authActions.setIsAuthenticated(false));
    navigate("/login");
  };

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return (
    <div className="">
      <Alert variant="destructive">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>

      <Button className="m-10 " onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
}

export default AlertDestructive;
