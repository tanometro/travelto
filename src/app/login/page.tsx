import React from "react";
import LoginForm from "@/components/LoginForm/LoginForm";
import ExternalLogin from "@/components/ExternalLogin/ExternalLogin";
import Logo from "@/public/images/logo.png";
import FondoLogin from "@/public/images/fondo-login.jpg";
import Image from "next/image";
// import Amadeus from "amadeus";

export default async function page() {
  // let resultado;
  // var amadeus = new Amadeus({
  //   clientId: "vVRebnNHy3upGEo7dET08FHQ2CTgkeBR",
  //   clientSecret: "hoIjWPgg4Nb00ze5",
  // });

  // await amadeus.shopping.flightOffersSearch
  //   .get({
  //     originLocationCode: "SYD",
  //     destinationLocationCode: "BKK",
  //     departureDate: "2023-11-01",
  //     adults: "2",
  //   })
  //   .then(function (response) {
  //     resultado = response.data;
  //   })
  //   .catch(function (responseError) {
  //     console.log(responseError.code);
  //   });
  // console.log(resultado);
  return (
    <div>
      <div className="fixed z-[-2] top-0 left-0 w-screen h-screen">
        <Image
          src={FondoLogin}
          alt="Fondo"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute overflow-hidden "
        />
      </div>
      <Image
        className="fixed top-10 left-10"
        src={Logo}
        alt="Logo"
        width={200}
        height={150}
      />
      <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-gradient-radial from-transparent to-black" />
      <div className="flex gap-3 w-100 justify-center items-center flex-col-reverse z-[1] md:items-start md:flex-row p-3 min-h-[fit-content] item">
        <div className="flex flex-col gap-6 h-60 w-96 p-2">Banner L</div>
        <div className="flex flex-col h-1/2 justify-between">
          <LoginForm />
          <ExternalLogin />d
        </div>
      </div>
    </div>
  );
}
