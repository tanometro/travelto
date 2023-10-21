"use client"
import { useSession } from "next-auth/react"
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
        <article>
            <div>
                {session.user?.image && <Image src={session.user?.image} width={200} height={200} alt="My photo" />}
            </div>

            <div className="flex items-center">
                <h2>{session.user?.email}</h2>
            </div>
            <div className="flex" data-te-input-wrapper-init>
                <h2>{session.user?.name}</h2>
            </div>
        </article>

    )
}