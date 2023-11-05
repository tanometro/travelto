"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

import { UserData } from "./DetailUser/UserData";
import { LoginForm } from "./LoginForm";
import { useRouter } from "next/navigation";
import SignOrLog from "../SignOrLog/SignOrLog";

export const ViewUser = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status]);
  if (status === "loading") {
    return (
      <article>
        <h2>Loading...</h2>
      </article>
    );
  } else
    return (
      <>
        {!session && <SignOrLog />}
        <div className="w-full p-5">
          {status !== "authenticated" && <LoginForm />}
        </div>
      </>
    );
};
