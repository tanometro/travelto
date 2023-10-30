"use client";
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([
    // {
    //   id: 1,
    //   name: "Prueba",
    //   isActive: true,
    //   hours: "3:00",
    //   city: "CDMX",
    //   country: "México",
    //   latitude: 0,
    //   ranking: 5,
    //   longitude: 0,
    //   price: 500,
    //   duration: "3:00",
    //   image: "",
    // },
  ]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
