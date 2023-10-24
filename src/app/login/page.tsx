"use client";
import { ViewUser } from "@/components/login/ViewUser";
import { useSession } from "next-auth/react";
import Image from "next/image";
import FondoLogin from "@/public/images/fondo-login.jpg";
import FondoLogin2 from "@/public/images/fondo2.jpg";
import FondoLogin3 from "@/public/images/fondo3.jpg";
import Logo from "@/public/images/logo4.png";
import SignOrLog from "@/components/SignOrLog/SignOrLog";

export default function DashboardLogin() {
  const { data: session } = useSession();
  return (
    <section className="h-screen">
      <div className="container h-full p-2 pt-24 md:px-6 md:py-24">
        <Image
          className="fixed top-10 left-10"
          src={Logo}
          alt="Logo"
          width={200}
          height={150}
        />
        <div className="fixed z-[-2] top-0 left-0 w-screen h-screen">
          <Image
            src={FondoLogin2}
            alt="Fondo"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="absolute overflow-hidden "
          />
        </div>
        <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-gradient-radial from-transparent to-black" />
        <div className="flex flex-col-reverse w-50 md:flex-row md:min-w-[50rem] justify-center p-5">
          {!session && <SignOrLog />}
          <ViewUser />
        </div>
      </div>
    </section>
  );
}
