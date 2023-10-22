"use client"
import { useState } from "react"
import { signIn, useSession } from "next-auth/react"
import validate from "./validate";

export const LoginForm = () => {
    const { data: session, status } = useSession();
    const [errors, setErrors] = useState<string[]>([]);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");



    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const stateErrors: string[] = validate(name, email, password)
        setErrors([...stateErrors]);
        if (stateErrors.length === 0) {
            // aca llamo a la api

            const responseNextAuth = signIn("credentials", {
                name,
                email,
                password,
                redirect: false,
            })
        }
    }
    return (
        <form onSubmit={handlerSubmit}>
            <div className="flex items-center">
                <label htmlFor="name" className="block w-full text-sm font-medium leading-6 text-gray-900" >
                    NAME
                    <input type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={name}
                        placeholder="Name..."
                        onChange={(event) => setName(event.target.value)} />
                </label>
            </div>
            <div className="flex items-center">
                <label htmlFor="email" className="block w-full text-sm font-medium leading-6 text-gray-900" >
                    EMAIL
                    <input type="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={email}
                        placeholder="Email..."
                        onChange={(event) => setEmail(event.target.value)} />
                </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>

                <label className="block w-full text-sm font-medium leading-6 text-gray-900">
                    PASSWORD
                    <input placeholder="Password..." className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </label>
            </div>
            <div className="relative mb-6 flex flex-col gap-y-4">
                <button className="flex w-full justify-center p-30 rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">SING IN</button>

                <button type="button" className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => signIn("google", {
                    redirect: false,
                })}>Sign In with Google</button>
            </div>
            {errors.length > 0 && (
                <div className="text-red-500">
                    {errors.map((error, index) => (
                        <p key={index}>{error}</p>
                    ))}
                </div>
            )}

        </form>

    )
}


