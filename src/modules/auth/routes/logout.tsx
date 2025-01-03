import { useEffect } from "react";
import { useNavigate } from "react-router";
import { PATHS } from "../../shared/paths";

export const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");

    navigate(PATHS.signIn);
  }, [navigate]);

  return <>Cerrando sesión</>;
};
