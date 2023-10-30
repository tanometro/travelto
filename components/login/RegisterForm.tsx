"use client"
import FormInput from "@/components/login/FormInput/FormInput";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import registerValidate from "./registerValidate";
import Image from "next/image";
import axios from "axios";
import RegisterImage from "./RegisterImage/RegisterImage";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
    const router = useRouter();
    const [errors, setErrors] = useState<string[]>([]);
    const [imageUser, setImageUser] = useState<string>("https://res.cloudinary.com/dsrdos5pb/image/upload/v1698623834/qa4ex6esskztxkfkmrqd.jpg");
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
        axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/create`,
            {
                image: imageUser,
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

            router.push("/")
        }).catch((error) => {
            setErrors(error.message);
            return;
        });

    }

    return (
        <section className="flex flex-wrap w-screen items-center sm:justify-center lg:justify-around">
            <RegisterImage imageUser={imageUser} handler={() => setImageUser} />
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