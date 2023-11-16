import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

function ProfileInfo() {
  const { data: session, status } = useSession();
  return (
    <div className="relative">
      <div className="absolute left-[-1.5rem] top-0">
        <Link href="/Account">
        <Image
          src={session?.user?.image!}
          alt="UserImage"
          width={50}
          height={50}
          className="rounded-full"
        />
        </Link>
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
