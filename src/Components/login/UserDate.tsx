/* eslint-disable @next/next/no-img-element */
"use client"
import { signOut, useSession } from "next-auth/react"
import Image from 'next/image'

export const UserDate = () => {
    const { data: session } = useSession();
    if (!session) {
        return (
            <article>
                <h2>Loading...</h2>
            </article>
        )
    }

    return (
        <article className="h-500 flex flex-col items-center justify-around">
            <div >
                <img src={session.user?.image as string} width={200} height={200} alt="My photo" />
            </div>

            <div className="flex">
                <h2>{session.user?.name}</h2>
            </div>
            <div className="flex items-center">
                <h2>{session.user?.email}</h2>
            </div>
            <button onClick={async () => { await signOut({ callbackUrl: "/" }) }} className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-black">Close</button>
        </article>

    )
}