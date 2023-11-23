import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../hooks/Auth";

export const SecureRoute = ({children}) => {
  const { isAuthenticated } = Auth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
    }

  }, [isAuthenticated]);

  if (isAuthenticated()) {
    return children;
  }
  return null;
}