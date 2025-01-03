import { useMemo } from "react";

export const useAuth = () => {
  return useMemo(() => localStorage.getItem("user"), []);
};
