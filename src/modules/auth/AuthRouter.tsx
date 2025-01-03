import { Route } from "react-router";
import { SignIn } from "./routes/sign-in";
import { Logout } from "./routes/logout";
import { PATHS } from "../shared/paths";

export const AuthRouter = () => {
  return (
    <>
      <Route path={PATHS.signIn} element={<SignIn />} />
      <Route path={PATHS.logout} element={<Logout />} />
    </>
  );
};
