import { useEffect, useState } from "react";
import { localApi } from "../../../api/localApi";
import { Input } from "../../../components/Input";
import { encodeMessage } from "../../shared/utils";
import { useHandleAlert } from "../../shared/alertStore";
import { useNavigate } from "react-router";
import { PATHS } from "../../shared/paths";
import { useAuth } from "../controllers/useAuth";

export const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const addAlert = useHandleAlert();

  const navigate = useNavigate();

  const user = useAuth();

  useEffect(() => {
    if (user) {
      navigate(PATHS.dashboard);
    }
  }, [navigate, user]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (
      e.currentTarget.elements.namedItem("email")! as HTMLInputElement
    ).value;
    const password = (
      e.currentTarget.elements.namedItem("password")! as HTMLInputElement
    ).value;

    try {
      setLoading(true);

      await localApi.login(
        await encodeMessage(email),
        await encodeMessage(password),
      );

      localStorage.setItem("user", email);

      navigate(PATHS.dashboard);
    } catch (error) {
      setLoading(false);

      addAlert({ type: "alert-error", text: (error! as Error).message });
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="fixed w-full h-[300px] bg-primary top-0 left-0"></div>
      <div className="card w-full max-w-sm bg-base-100 shadow-md mt-16 mx-2">
        <div className="card-body">
          <div className="w-full">
            <p className="text-2xl font-bold w-full">Iniciar sesión</p>
            <p className="text-sm w-full">
              Ingresa tu correo y contraseña para entrar
            </p>
          </div>
          <div className="space-y-1 mt-4">
            <form onSubmit={handleLogin}>
              <Input
                id="email"
                title="Correo"
                placeholder="Ingrese su correo electronico"
                type="email"
              />
              <Input
                id="password"
                title="Contraseña"
                placeholder="Ingrese su contraseña"
                type="password"
              />
              <div className="w-full">
                <button
                  className="btn btn-primary w-full mt-4"
                  type="submit"
                  disabled={loading}
                >
                  {loading && <span className="loading loading-spinner"></span>}
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
