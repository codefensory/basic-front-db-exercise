import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import { DASHBOARD_PATHS, PATHS } from "../../shared/paths";

export const Dashboard = () => {
  return (
    <div>
      <Navbar
        paths={[
          PATHS.dashboard,
          DASHBOARD_PATHS.clients,
          DASHBOARD_PATHS.createClient,
          PATHS.logout,
        ]}
      />
      <div className="mt-16 p-6 min-h-[calc(100vh-64px)]">
        <Outlet />
      </div>
    </div>
  );
};
