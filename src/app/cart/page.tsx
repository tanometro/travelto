"use client";
import React, { useContext, useEffect, useState } from "react";
import CartCard from "@/components/Cart/CartCard/CartCard";
import { CartContext } from "@/src/app/context/cart";

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
}

export default function page() {
  const { cart } = useContext(CartContext);
  const [resultado, setResultado] = useState<attractions[]>([]);
  return (
    <div className="container mx-auto p-10 flex flex-col justify-center items-center">
      <h1>Carrito de compras</h1>
      {cart.map((attraction) => (
        <CartCard attraction={attraction} />
      ))}
    </div>
  );
}
