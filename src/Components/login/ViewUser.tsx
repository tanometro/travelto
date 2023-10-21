"use client"
import { useState } from "react"
import { signIn, signOut, useSession } from "next-auth/react"
import { log } from "console";
import { UserDate } from "./UserDate";
import { LoginForm } from "./LoginForm";

export const ViewUser = () => {
    const { data: session, status } = useSession();
    console.log(session);
    console.log(status);
    if (!session) {
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


