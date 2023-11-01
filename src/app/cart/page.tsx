"use client";
import "remixicon/fonts/remixicon.css";
import React, { useContext, useEffect, useState } from "react";
import CartCard from "@/components/Cart/CartCard/CartCard";
import { CartContext } from "@/src/app/context/cart";
import Total from "@/components/Total/Total";
import { useRouter } from "next/navigation";

interface attractions {
  id: number;
  name: string;
  isActive: boolean;
  hours: string;
  city: string;
  country: string;
  latitude: string;
  ranking: number;
  longitude: string;
  price: number;
  duration: string;
  image: string;
  quantity: number;
}

export default function page() {
  const { cart } = useContext(CartContext);
  const router = useRouter();
  const [resultado, setResultado] = useState<attractions[]>([]);

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="container mx-auto flex justify-center items-start gap-5 p-10">
      <div className=" flex flex-col gap-5">
        <div className="flex justify-between">
          <h1 className="text-2xl">Shopping cart</h1>
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
