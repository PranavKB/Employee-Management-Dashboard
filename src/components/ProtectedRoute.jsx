import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth/useAuth";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
