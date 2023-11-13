"use client";
import "remixicon/fonts/remixicon.css";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import CartCard from "@/components/Cart/CartCard/CartCard";
import { CartContext } from "@/src/app/context/cart";
import Total from "@/components/Total/Total";
import Fondo from "@/public/images/fondo_cart.jpg";
import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton/BackButton";

export default function Page() {
  const router = useRouter();
  const { cart } = useContext(CartContext);

  useEffect(() => {
    if (Object.keys(cart).length === 0) router.push("/");
  }, [cart]);
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
          <BackButton />
        </div>
        {Object.keys(cart).map((id) => (
          <CartCard key={"Card" + id} attraction={cart[id]} />
        ))}
      </div>
      <Total />
    </div>
  );
}
