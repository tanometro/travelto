import React from "react";
import { CartContext } from "@/src/app/context/cart";
import { FC, MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { useContext } from "react";
import PaymentSelector from "../Cart/PaymentSelector/PaymentSelector";

export default function Total() {
  const { cart, setCart } = useContext(CartContext);
  let total = 0;
  Object.keys(cart).map((id) => (total += cart[id].price * cart[id].quantity));
  return (
    <div className="p-5 m-0 sm:mt-[52px] bg-slate-500 bg-opacity-90 rounded-md z-[100]">
      <h2 className="text-xl mb-10">Selecciona tu método de pago:</h2>
      <PaymentSelector />
      <h1 className="text-2xl mb-10">
        Total: <br />${total}
      </h1>
      <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">
        Pagar
      </button>
    </div>
  );
}
