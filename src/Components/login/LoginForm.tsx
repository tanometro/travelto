"use client"
import { useState } from "react"
import { signIn, signOut, useSession } from "next-auth/react"

export const LoginForm = () => {
    const { data: session, status } = useSession();
    //const [errors, setErrors] = useState<string[]>([]);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //setErrors([]);
        // aca llamo a la api
    }

    /*  if (session) {
         return (
             <>
                 Welcome {session.user?.email}
                 <button onClick={async () => { await signOut({ callbackUrl: "/" }) }} className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-white">Close</button>
             </>
         )
     } */

    return (
        <form onSubmit={handlerSubmit}>
            <div className="flex items-center">
                {session ? <h1>{session.user?.email}</h1> : <label htmlFor="email" className="" >
                    EMAIL
                    <input type="email"
                        className="p-0 bg-transparent text-sm leading-6 pl-1"
                        value={email}
                        placeholder="Email..."
                        onChange={(event) => setEmail(event.target.value)} />
                </label>}
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>

                <input className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1" type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                    PASSWORD
                </label>
            </div>

            <button type="submit">SING IN</button>

            <button onClick={() => signIn()}>Sign In with Google</button>

        </form>

    )
}


