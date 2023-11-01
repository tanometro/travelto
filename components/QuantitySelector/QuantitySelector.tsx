import React from "react";
import { useEffect, useState } from "react";
import { CartContext } from "@/src/app/context/cart";
import { useContext } from "react";

export default function QuantitySelector({
  attraction,
  setSelection = (newState: boolean) => {},
}) {
  const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(
    cart[attraction.id] ? cart[attraction.id].quantity : 0
  );

  useEffect(() => {
    setSelection(quantity > 0);
    if (quantity > 0) {
      setCart({ ...cart, [attraction.id]: { ...attraction, quantity } });
    }
    if (quantity === 0) {
      const temp = { ...cart };
      delete temp[attraction.id];
      setCart({ ...temp });
    }
  }, [quantity]);
  const incQuantity = () => {
    setQuantity(quantity === 100 ? 100 : quantity + 1);
  };

  const decQuantity = () => {
    setQuantity(quantity === 0 ? 0 : quantity - 1);
  };
  return (
    <>
      <div
        className="w-[1.5rem] h-[1.5rem] cursor-pointer flex justify-center items-center select-none hover:text-red-300 font-extrabold bg-slate-900 rounded-full opacity-90"
        onClick={decQuantity}
      >
        -
      </div>
      <input
        type="text"
        disabled
        className="w-[2rem] h-[1.5rem] text-center text-black bg-white rounded-md"
        value={quantity}
      />
      <div
        className="w-[1.5rem] h-[1.5rem] cursor-pointer flex justify-center items-center select-none hover:text-red-300 font-extrabold bg-slate-900 rounded-full opacity-90"
        onClick={incQuantity}
      >
        +
      </div>
    </>
  );
}
