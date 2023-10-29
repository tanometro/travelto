"use client"
import FormInput from "@/components/login/FormInput/FormInput";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import registerValidate from "./registerValidate";
import Image from "next/image";
import axios from "axios";

export default function RegisterForm() {
    const [errors, setErrors] = useState<string[]>([]);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [checkPassword, setCheckPassword] = useState<string>("");
    const [dni, setDni] = useState<string>("");

    const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors([]);

        const stateErrors: string[] = registerValidate(name, email, password, checkPassword, dni);
        setErrors([...stateErrors]);
        if (stateErrors.length != 0) return;
        const nameUser = name.split(" ");
        const res = axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/create`,
            {

                name: nameUser,
                email: email,
                dni: dni,
                password: password,

            }
        ).then(async (res) => {
            console.log(res.data);

            const responseNextAuth = await signIn("credentials", {
                name,
                email,
                password,
                redirect: false,
            });

            if (responseNextAuth?.error) {
                // aca responde la app
                setErrors(responseNextAuth.error.split(","));
                return;
            }

        }).catch((error) => {
            setErrors(error.message);
            return;
        });

    }

    return (
        <section className="flex flex-wrap w-screen items-center sm:justify-center lg:justify-around">
            <div className="flex relative h-80 w-80 aligne-center">
                <Image src={"/images/viajero.jpg"} alt="Fondo"
                    fill
                    className="absolute overflow-hidden object-cover rounded-full" />
                <div className="flex flex-col justify-end">
                    <button className="text-white flex aligne- bg-black relative ">Subir imagen</button>
                </div>
            </div>
            <div>

                <form className="flex flex-col w-96" onSubmit={handlerSubmit}>
                    <FormInput
                        type="text"
                        name="Name"
                        value={name}
                        handler={(event) => setName(event.target.value)}
                        autoComplete="name"
                    />
                    <FormInput
                        type="email"
                        name="Email"
                        value={email}
                        handler={(event) => setEmail(event.target.value)}
                        autoComplete="email"
                    />

                    <FormInput
                        type="number"
                        name="Dni"
                        value={dni}
                        handler={(event) => setDni(event.target.value)}
                        autoComplete="off"
                    />

                    <FormInput
                        type="password"
                        name="Password"
                        value={password}
                        handler={(event) => setPassword(event.target.value)}
                        autoComplete="off"
                    />

                    <FormInput
                        type="password"
                        name="Verific"
                        value={checkPassword}
                        handler={(event) => setCheckPassword(event.target.value)}
                        autoComplete="off"
                    />

                    <button className="form-group relative mb-10 w-[80%] rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registrarme</button>

                    {errors.length > 0 && (
                        <div className="text-red-900 ">
                            {errors.length > 0 && (
                                <div className="form-group relative mb-10 w-[80%] justify-self-center justify-center">
                                    {errors?.map((error, index) => (
                                        <p className="text-white bg-red-700" key={index}>* {error}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </form>
            </div>
        </section>
    )

}