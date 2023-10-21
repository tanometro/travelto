/* eslint-disable @next/next/no-img-element */
"use client"
import { useState, useEffect } from "react"
import { Ripple, Input, initTE } from "tw-elements";


export const LoginForm = () => {
    //const [errors, setErrors] = useState<string[]>([]);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        initTE({ Ripple, Input });
    }, []);

    const handlerSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        //setErrors([]);
        // aca llamo a la api
    }

    return (
        <div className="container h-full px-6 py-24">
            <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                    <img
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="w-full"
                        alt="Phone image" />
                    {/* <h1 className="text-5xl font-semibold">Travel To</h1> */}
                </div>
                <div className="md:w-8/12 lg:ml-6 lg:w-5/12">

                    <form onSubmit={handlerSubmit}>
                        <div className="relative mb-6" data-te-input-wrapper-init>

                            <input type="email"
                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)} />
                            <label htmlFor="email" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary" >
                                EMAIL</label>
                        </div>
                        <div className="relative mb-6" data-te-input-wrapper-init>

                            <input className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                            <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                                PASSWORD
                            </label>
                        </div>


                        <button type="submit">SING IN</button>
                    </form>
                </div>
            </div>
        </div>

    )
}


