"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

import { UserData } from "./UserData";
import { LoginForm } from "./LoginForm";

export const ViewUser = () => {
  const { status } = useSession();
  useEffect(() => {}, [status]);
  if (status === "loading") {
    return (
      <article>
        <h2>Loading...</h2>
      </article>
    );
  }

  return (
    <div className="w-full p-5">
      {status === "authenticated" ? <UserData /> : <LoginForm />}
    </div>
  );
};
