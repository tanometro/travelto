import FormInput from "@/components/login/FormInput/FormInput";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

export default function RegisterForm() {
    const [errors, setErrors] = useState<string[]>([]);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [dni, setDni] = useState<string>("");

    const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors([]);
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
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
            />
            <FormInput
                type="mail"
                name="Email"
                value={email}
                handler={(event) => setEmail(event.target.value)}
            />
            <FormInput
                type="password"
                name="Password"
                value={password}
                handler={(event) => setPassword(event.target.value)}
            />
            <FormInput
                type="text"
                name="Dni"
                value={dni}
                handler={(event) => setDni(event.target.value)}
            />

            {errors.length > 0 && (
                <div className="text-red-800">
                    {errors.map((error, index) => (
                        <p key={index}>{error}</p>
                    ))}
                </div>
            )}
        </form>
    )

}