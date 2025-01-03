import { useRef, useState } from "react";
import { Input } from "../../../components/Input";
import { BasicPageLayout } from "../../dashboard/layouts/BasicPageLayout";
import { localApi } from "../../../api/localApi";
import { useHandleAlert } from "../../shared/alertStore";

export const NewClientPage = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleAlert = useHandleAlert();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    const clientData = {
      name: formData.get("name") as string,
      lastname: formData.get("lastname") as string,
      email: formData.get("email") as string,
      city: formData.get("city") as string,
    };

    // Validación básica
    if (
      !clientData.name ||
      !clientData.lastname ||
      !clientData.email ||
      !clientData.city
    ) {
      handleAlert({
        type: "alert-error",
        text: "Todos los campos son obligatorios",
      });
      return;
    }

    try {
      setLoading(true);

      await localApi.addClient(clientData);

      handleAlert({
        type: "alert-success",
        text: "Cliente guardado exitosamente",
      });

      // Limpiar el formulario
      formRef.current?.reset();
    } catch (error) {
      handleAlert({
        type: "alert-error",
        text: (error as Error).message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <BasicPageLayout>
      <form ref={formRef} onSubmit={handleSubmit} className="max-w-md">
        <Input title="Nombres" placeholder="Ingrese sus nombres" name="name" />
        <Input
          title="Apellidos"
          placeholder="Ingrese sus apellidos"
          name="lastname"
        />
        <Input
          title="Correo"
          placeholder="Ingrese su correo"
          name="email"
          type="email"
        />
        <Input title="Ciudad" placeholder="Ingrese su ciudad" name="city" />
        <button
          type="submit"
          className="btn btn-primary mt-4"
          disabled={loading}
        >
          {loading && <span className="loading loading-spinner"></span>}
          Guardar
        </button>
      </form>
    </BasicPageLayout>
  );
};
