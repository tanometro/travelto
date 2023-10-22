"use client"
import { useEffect } from "react"
import { useSession } from "next-auth/react"

import { UserDate } from "./UserDate";
import { LoginForm } from "./LoginForm";

export const ViewUser = () => {
    const { status } = useSession();
    useEffect(() => {

    }, [status])
    if (status === "loading") {
        return (
            <article>
                <h2>Loading...</h2>
            </article>
        )
    }

    return (
        <>
            {status === "authenticated" ? <UserDate /> : <LoginForm />}
        </>

    )
}


