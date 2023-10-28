"use client"
import FormInput from "@/components/login/FormInput/FormInput";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import registerValidate from "./registerValidate";

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
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/create`,
            {

                method: "POST",
                headers: { "Content-Type": "aplication/json" },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),

            }
        );

        const responseApi = await res.json();

        if (!res.ok) {
            setErrors(responseApi.message);
            return;
        }
        const responseNextAuth = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (responseNextAuth?.error) {
            // aca responde la app
            setErrors(responseNextAuth.error.split(","));
            return;
        }
    }

    return (
        <form onSubmit={handlerSubmit}>
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
                            {errors.map((error, index) => (
                                <p className="text-white bg-red-700" key={index}>* {error}</p>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </form>
    )

}