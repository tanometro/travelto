"use client";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {}
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
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
