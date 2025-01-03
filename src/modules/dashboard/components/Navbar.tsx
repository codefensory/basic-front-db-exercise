import { useRef } from "react";
import { Link } from "react-router";
import { PATHS_INFORMATION } from "../../shared/paths";

interface NavbarProps {
  paths: string[];
}

export const Navbar = ({ paths }: NavbarProps) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const handleClose = () => {
    detailsRef.current?.removeAttribute("open");
    console.log(detailsRef.current);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm fixed w-full top-0 left-0 z-20">
      <div className="navbar-start">
        <details className="dropdown" ref={detailsRef}>
          <summary className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </summary>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {paths.map((path) => (
              <li key={path} onClick={handleClose}>
                <Link to={path}>{PATHS_INFORMATION[path].title}</Link>
              </li>
            ))}
          </ul>
        </details>
        <a className="btn btn-ghost text-xl">Sistema clientes</a>
      </div>
    </div>
  );
};
