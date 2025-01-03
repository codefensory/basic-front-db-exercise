import { PropsWithChildren, useEffect } from "react";
import { useAuth } from "../modules/auth/controllers/useAuth";
import { useNavigate } from "react-router";
import { PATHS } from "../modules/shared/paths";

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const user = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(PATHS.signIn);
    }
  }, [navigate, user]);

  return <>{user ? children : null}</>;
};
