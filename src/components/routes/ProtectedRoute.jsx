// routes/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ children, allowedRole }) => {
  const { currentUser, role, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!currentUser) return <Navigate to="/login" />;

  // Handle allowedRole as single string or array
  const roles = Array.isArray(allowedRole) ? allowedRole : [allowedRole];

  if (!roles.includes(role)) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
