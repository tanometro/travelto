/* 'use client'

import Image from "next/image";

import getUserByEmail from "@/src/requests/getUsersByEmail";
import { useSession } from "next-auth/react";
import getUserById from "@/src/requests/getUsersById";



export default function DataUser() {
    const { data: session, status } = useSession();

    if (!session) {
        return (
            <article>
                <h2>Loading...</h2>
            </article>
        );
    }
    const viewUser = getUserById(session?.user.id, session?.user.token);

    return (
        <div>
            <Image
                src={viewUser?.image || "https://res.cloudinary.com/dsrdos5pb/image/upload/v1698623834/qa4ex6esskztxkfkmrqd.jpg"}
                alt="UserImage"
                width={300}
                height={300}
            />
            <div className="h-300 flex flex-col items-center justify-evenly">
                <h1>{viewUser?.name}</h1>
                <h3>{viewUser?.email} </h3>
                <h3>{viewUser?.dni}</h3>
            </div>
        </div>
    );
} */