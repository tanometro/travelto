import QuantitySelector from "@/components/QuantitySelector/QuantitySelector";
import { CartContext } from "@/src/app/context/cart";
import React, {FC, MouseEventHandler, ReactNode, useEffect, useState, useContext } from "react";

export default function AddToCart({ attraction }): ReactNode {
  const { cart, setCart } = useContext(CartContext);
  const [showMenu, setShowMenu] = useState(false);
  const [selected, setSelected] = useState(cart.hasOwnProperty(attraction.id));

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setShowMenu(!showMenu);
  };
  console.log(attraction);
  return (
    <div className="relative">
      <div onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            d="M6.00488 9H19.9433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V9ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"
            fill={selected ? `#bebc25` : `rgba(255,255,255,1)`}
          ></path>
        </svg>
      </div>
      {showMenu && (
        <div className=" absolute z-[1000] flex gap-1 backdrop-blur-md items-center justify-center w-[6rem] h-[3rem] bg-slate-200 rounded-md bg-opacity-50 left-[-2.2rem] top-[30px]">
          <QuantitySelector
            attraction={attraction}
            setSelection={setSelected}
          />
        </div>
      )}
    </div>
  );
}
