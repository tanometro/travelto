"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import "remixicon/fonts/remixicon.css";
import { baseURL } from "@/constant";
import Link from "next/link";
import { AttractionInterface } from "@/src/interfaces";
import AddToCart from "@/components/Cart/AddToCart/AddToCart";
import BackButton from "@/components/BackButton/BackButton";

export default function DetailID({ params }) {
  const { id } = params;
  const [attraction, setAttraction] = useState<AttractionInterface>({
    id: 0,
    name: "",
    Location: { city: "", country: "" },
    latitude: "",
    longitude: "",
    price: 0,
    ranking: 0,
    hours: "",
    duration: "",
    image: "",
    description: "",
    isActive: true,
  });
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const elemento = event.target as HTMLElement;
    if (
      elemento &&
      !(
        elemento.id.includes("Attraction") ||
        elemento.parentElement?.id.includes("Attraction")
      )
    ) {
      const menues = document.querySelectorAll(".quantity_selector");
      menues.forEach((menu) => {
        if (!menu.classList.contains("hidden")) {
          menu.classList.remove("flex");
          menu.classList.add("hidden");
        }
      });
    }
  };
  const getDatos = async () => {
    try {
      let res = await axios.get(`${baseURL}/attractions/${id}`);
      let datos = res.data;
      console.log(datos);
      if (!datos.name) {
        window.alert("No existe esta detalle de atraccion");
      } else {
        setAttraction(datos);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDatos();
  }, [id]);

  return (
    <div
      className="relative pt-20 mx-auto min-w-[20rem] w-[90%]"
      onClick={handleClick}
    >
      <div className="flex">
        <div className="flex gap-5 w-[90%] mx-auto justify-center my-2">
          <AddToCart attraction={attraction} />
          <h1 className="text-center text-2xl">{attraction.name}</h1>
          <BackButton />
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-5 gap-5 justify-start">
        <div className="">
          <Image
            className="w-[100%]"
            src={attraction.image}
            alt={attraction.name}
            width={450}
            height={500}
          />
        </div>
        <div className="w-[100%] my-10 md:my-0">
          <h2>{attraction.description}</h2>
        </div>
      </div>

      <div className="flex justify-between flex-col items-center gap-5 md:flex-row md:w-[30rem] mb-10 mx-auto">
        <span>
          <i className="ri-map-pin-line" /> {attraction.Location.country} -{" "}
          {attraction.Location.city}
        </span>
        <span> Precio: $ {attraction.price} </span>
        <span> Ranking: {attraction.ranking}</span>
      </div>
    </div>
  );
}
