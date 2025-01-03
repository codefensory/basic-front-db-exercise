import { useMemo } from "react";
import { useLocation } from "react-router";
import { PATHS_INFORMATION } from "../../shared/paths";

export const Breadcrumb = () => {
  const location = useLocation();

  const toUpperFistLetter = (word: string) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  const getPathTitle = (path: string) => {
    return PATHS_INFORMATION[path].title;
  };

  const breads = useMemo(
    () => location.pathname.split("/").slice(1),
    [location],
  );

  const formatBreads = useMemo(
    () =>
      breads.map(
        (word, index) =>
          getPathTitle(`/${breads.slice(0, index + 1).join("/")}`) ??
          toUpperFistLetter(word),
      ),
    [breads],
  );

  return (
    <div className="breadcrumbs text-sm">
      <ul>
        {formatBreads.map((item) => (
          <li key={item}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
