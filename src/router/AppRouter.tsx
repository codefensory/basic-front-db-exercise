import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import { AuthRouter } from "../modules/auth/AuthRouter";
import { DashboardRouter } from "../modules/dashboard/DashboardRouter";
import { PATHS } from "../modules/shared/paths";

const routes = [
  {
    path: "/",
    router: AuthRouter,
  },
  {
    path: PATHS.dashboard,
    router: DashboardRouter,
  },
];

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path}>
            {route.router()}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};
