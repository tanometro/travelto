import { ViewUser } from "@/components/login/ViewUser";
import Image from "next/image";
import Logo from "@/public/images/logo.png";

export default function DashboardLogin() {
  return (
    <section className="h-screen">
      <div className="container relative h-full p-2 pt-24 md:px-6 md:py-24">
        <Image
          className="relative  md:top-5 md:left-5"
          src={Logo}
          alt="Logo"
          width={250}
          height={180}
        />
        <div className="fixed z-[-2] top-0 left-0 w-screen h-screen">
          <Image
            src={"/images/fondo-login.jpg"}
            alt="Fondo"
            fill
            className="absolute overflow-hidden object-cover"
          />
        </div>
        <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-gradient-radial from-transparent to-black" />
        <div className="flex flex-col-reverse w-50 md:flex-row md:min-w-[50rem] justify-center p-5">
          <ViewUser />
        </div>
      </div>
    </section>
  );
}
