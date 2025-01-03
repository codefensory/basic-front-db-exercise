import { parentPath } from "./utils";

export const PATHS = {
  dashboard: "/dashboard",
  signIn: "/sign-in",
  logout: "/logout",
};

export const DASHBOARD_PATHS = parentPath(PATHS.dashboard, {
  clients: "/clients",
  createClient: "/create-client",
});

export const PATHS_INFORMATION = {
  [PATHS.dashboard]: {
    title: "Inicio",
  },
  [DASHBOARD_PATHS.clients]: {
    title: "Consulta de clientes",
  },
  [DASHBOARD_PATHS.createClient]: {
    title: "Crear cliente",
  },
  [PATHS.logout]: {
    title: "Cerrar sesión",
  },
};
