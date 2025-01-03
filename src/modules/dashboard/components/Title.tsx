import { useLocation } from "react-router";
import { PATHS_INFORMATION } from "../../shared/paths";

export const Title = () => {
  const location = useLocation();

  return (
    <h1 className="text-2xl font-bold">
      {PATHS_INFORMATION[location.pathname].title}
    </h1>
  );
};
