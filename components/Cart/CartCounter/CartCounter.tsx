import { CartContext } from "@/src/app/context/cart";
import React, { FC, ReactNode } from "react";
import { useContext } from "react";

export default function CartCounter(): ReactNode {
  const { cart } = useContext(CartContext);
  return (
    <div className="relative bg-opacity-30 rounded-full bg-slate-500 w-[40px] h-[40px] top-[-10%] left-[-10%]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className=" absolute top-[20%] left-[20%]"
      >
        <path
          d="M6.00488 9H19.9433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V9ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"
          fill="rgba(255,255,255,1)"
        ></path>
      </svg>
      <div
        className={`top-[25px] left-[-5px] absolute ${
          cart.length < 10 ? "w-4 h-4" : " w-6 h-6"
        } text-white text-xs flex items-center justify-center bg-red-800 rounded-full`}
      >
        {Object.keys(cart).length}
      </div>
    </div>
  );
}
