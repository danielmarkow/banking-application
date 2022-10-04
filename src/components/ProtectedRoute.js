import useAuth from "../hooks/useAuth";

function ProtectedRoute({children}) {
  const {token} = useAuth();

  if (!token) {
    return <p className="text-danger">Please login to view!</p>
  }

  return children;
}

export default ProtectedRoute;