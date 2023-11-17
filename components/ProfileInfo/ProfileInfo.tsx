import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

function ProfileInfo() {
  const { data: session, status } = useSession();

  if (!session) {
    return (
      <div>
        loading...
      </div>
    )
  }


  return (
    <div className="relative h-full">
      <div className="absolute h-full left-[-1.5rem] flex flex-row items-center top-0">
        <Link href=""
          onClick={() => signOut({ callbackUrl: "/" })}
          className="h-full w-auto items-center">
          {(!session?.user?.picture) ?
            <Image
              src={session?.user?.picture || "https://res.cloudinary.com/dsrdos5pb/image/upload/v1698623834/qa4ex6esskztxkfkmrqd.jpg"}
              alt="UserImage"
              width={50}
              height={50}
              className="rounded-full"
            /> :
            <h3>{session.user.name}</h3>

          }
        </Link>
        <Link
          href=""
          onClick={() => signOut({ callbackUrl: "/" })}
          className=""
        >
          <button className="flex rounded-full justify-center items-center text-white bg-red-500 w-10 h-10 "> X </button>
        </Link>
      </div>
    </div>
  );
}

export default ProfileInfo;
