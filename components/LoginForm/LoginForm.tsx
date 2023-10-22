import React from "react";
import FormInput from "@/components/FormInput/FormInput";
import Button from "@/components/Button/Button";

export default function LoginForm(): React.ReactNode {
  return (
    <form className="flex flex-col gap-6 h-[18rem] w-96 p-2">
      <h2>Iniciar Sesión</h2>
      <FormInput type="mail" name="Correo" />
      <FormInput type="password" name="Contraseña" />
      <Button text="Iniciar sesión" size="" />
    </form>
  );
}
