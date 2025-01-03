import { Route } from "react-router";
import { Dashboard } from "./routes/dashboard";
import { Welcome } from "./components/Welcome";
import { DASHBOARD_PATHS } from "../shared/paths";
import { ClientListPage } from "../clients/pages/ClientListPage";
import { NewClientPage } from "../clients/pages/NewClientPage";
import { ProtectedRoute } from "../../router/ProtectedRoute";

export const DashboardRouter = () => {
  return (
    <>
      <Route
        path=""
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route path="" element={<Welcome />} />
        <Route path={DASHBOARD_PATHS.clients} element={<ClientListPage />} />
        <Route
          path={DASHBOARD_PATHS.createClient}
          element={<NewClientPage />}
        />
      </Route>
    </>
  );
};
