"use client";
import FormInput from "@/components/login/FormInput/FormInput";
import { signIn } from "next-auth/react";
import React, { useEffect, useState } from "react";
import registerValidate from "./registerValidate";
import RegisterImage from "../RegisterImage/RegisterImage";
import { useRouter } from "next/navigation";
import createUser from "@/src/requests/postCreateUser";

export default function RegisterFormGoogle() {
    const router = useRouter();
    const [dni, setDni] = useState<string>("");
    const [errors, setErrors] = useState("");

    const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        //si no hay dni no hago nada
        setErrors("");
        if (dni.length < 5) {
            setErrors("El dni debe contener al menos 6 digitos");
            return;
        }
        //obtengo los datos de google
        const responseNextAuth = await signIn("google", {
            redirect: false,
            callbackUrl: "/login",

        });

        //si me da error muestro el error
        if (responseNextAuth?.error) {
            // aca responde la app
            setErrors(responseNextAuth.error);
            return;
        }
        //si no me da error creo el usuiario
        /* try {
            await createUser({
                name,
                lastName,
                dni,
                image: imageUser,
                email,
                password,
            })
        } catch (error) {
            setErrors(error.message);
            return;
        } */


    }

    return (
        <section className="flex flex-wrap w-screen items-center sm:justify-center lg:justify-around">

            <div>

                <form className="flex flex-col w-96" onSubmit={handlerSubmit}>

                    <FormInput
                        type="number"
                        name="Dni"
                        value={dni}
                        handler={(event) => setDni(event.target.value)}
                        autoComplete="off"
                    />

                    <button
                        className="form-group relative mb-10 w-[80%] rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Terminar registro
                    </button>

                    {errors.length > 0 && (
                        <div className="text-red-900 ">
                            {errors.length > 0 && (
                                <div className="form-group relative mb-10 w-[80%] justify-self-center justify-center">
                                    {errors && (
                                        <p className="text-white bg-red-700" >* {errors}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </form>
            </div>
        </section>
    )




}