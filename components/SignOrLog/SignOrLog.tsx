import React from "react";
import Button from "../login/Button/Button";
import Link from "next/link";

export default function SignOrLog(): React.ReactNode {
  return (
    <div className="flex flex-col items-center w-[80%] md:w-[40rem] p-1 pt-5 md:p-5">
      <h1 className="text-2xl mb-16">¿No registrado?</h1>
      <Link href={"/login/register"}>
        <Button text="Registrarce" size="" />
      </Link>
    </div>
  );
}
