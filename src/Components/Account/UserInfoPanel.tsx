"use client"

import { useSession } from "next-auth/react"
import Image from "next/image";



function UserInfoPanel() {
  const { data: session, status } = useSession();
  return (
    <section className="h-full w-full flex flex-col justify-around">
      <h1>{session?.user.name}</h1>
      <div className="flex flex-wrap w-300 h-600 bg-white">
        <Image
          src={session?.user?.picture!}
          alt="UserImage"
          width={300}
          height={300}
        />

      </div>
    </section>
  )
}

export default UserInfoPanel