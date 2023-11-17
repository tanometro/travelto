"use client"

import { useSession } from "next-auth/react"

//import DataUser from "./DataUser";

function UserInfoPanel() {
  const { data: session, status } = useSession();
  if (!session) {
    return (
      <article>
        <h2>Loading...</h2>
      </article>
    );
  }

  return (
    <section className="flex flex-wrap h-full w-full items-center justify-around">
      {/* <DataUser /> */}
    </section>
  )
}

export default UserInfoPanel