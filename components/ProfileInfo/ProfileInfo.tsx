import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

function ProfileInfo() {
  const { data: session, status } = useSession();
  return (
    <div className="relative">
      <div className="absolute left-[-1.5rem] top-0">
        <div className="font-capitalize">{session?.user?.name}</div>
        <Image
          src={session?.user?.picture || "https://res.cloudinary.com/dsrdos5pb/image/upload/v1698623834/qa4ex6esskztxkfkmrqd.jpg"}
          alt="UserImage"
          width={50}
          height={50}
          className="rounded-full"
        />
        <Link
          href=""
          onClick={() => signOut({ callbackUrl: "/" })}
          className=""
        >
          Logout
        </Link>
      </div>
    </div>
  );
}

export default ProfileInfo;
