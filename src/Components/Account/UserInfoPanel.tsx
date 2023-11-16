"use client"
import Image from "next/image";
import { useSession } from "next-auth/react"

function UserInfoPanel() {
  const { data: session, status } = useSession();

  return (
    <section className="flex flex-wrap h-full w-full items-center justify-around">
      <Image
        src={session?.user?.picture || "https://res.cloudinary.com/dsrdos5pb/image/upload/v1698623834/qa4ex6esskztxkfkmrqd.jpg"}
        alt="UserImage"
        width={300}
        height={300}
      />
      <div className="h-300 flex flex-col items-center justify-evenly">
        <h1>{session?.user.name}</h1>
        <h3>{session?.user.email} </h3>
      </div>

    </section>
  )
}

export default UserInfoPanel