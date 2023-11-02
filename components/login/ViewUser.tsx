"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

import { UserData } from "./UserData";
import { LoginForm } from "./LoginForm";
import SignOrLog from "../SignOrLog/SignOrLog";

export const ViewUser = () => {
  const { data: session, status } = useSession();
  useEffect(() => { }, [status]);
  if (status === "loading") {
    return (
      <article>
        <h2>Loading...</h2>
      </article>
    );
  }

  return (
    <>
      {!session && <SignOrLog />}
      <div className="w-full p-5">
        {status === "authenticated" ? <UserData /> : <LoginForm />}
      </div>
    </>
  );
};
