"use client";
import "remixicon/fonts/remixicon.css";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import CartCard from "@/components/Cart/CartCard/CartCard";
import { CartContext } from "@/src/app/context/cart";
import Total from "@/components/Total/Total";
import { useRouter } from "next/navigation";
import Fondo from "@/public/images/fondo_cart.jpg";
import { AttractionsCartInterface } from "@/src/interfaces";

export default function Page() {
  const { cart } = useContext(CartContext);
  const router = useRouter();
  const [resultado, setResultado] = useState<AttractionsCartInterface[]>([]);

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="md:container m-0 sm:mx-auto flex flex-col sm:flex-row justify-center items-center sm:items-start gap-5 pt-10 sm:p-10">
      <Image
        src={Fondo}
        alt="FondoCart"
        layout="cover"
        className="fixed z-[100] min-w-screen min-h-screen top-0 left-0 overflow-y-hidden"
      />
      <div className="z-[101] flex flex-col gap-5 mx-auto lg:max-w-[75%]">
        <div className="flex justify-between">
          <h1 className="text-2xl">Mi Carrito 🛒</h1>
          <button
            onClick={handleBack}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
            >
              <path
                d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
                fill="rgba(247,245,245,1)"
              ></path>
            </svg>
          </button>
        </div>
        {Object.keys(cart).map((id) => (
          <CartCard attraction={cart[id]} />
        ))}
      </div>
      <Total />
    </div>
  );
}
