"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import "remixicon/fonts/remixicon.css";
import { baseURL } from "@/constant";
import Link from "next/link";
import { AttractionInterface } from "@/src/interfaces";

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
  const getDatos = async () => {
    try {
      let res = await axios.get(`${baseURL}/attractions/${id}`);
      let datos = res.data;
      console.log(datos)
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
    <div className="relative ml-20 mr-20 mt-10 pl-20">
      <h1 className="text-center text-2xl">{attraction.name}</h1>
      <div className="flex justify-between mi-20 pl-20 mr-20">
        
        <div className="flex gap-5 ml-10 mr-6">
          <i className="ri-shopping-cart-line "></i>
          <Link href="/" className="bg-white color:black w-6 text-center">
            X{" "}
          </Link>
        </div>
      </div>
      <div className="flex flex-col-2">
      <div className="w-1/2" >
        <Image
          className="ml-10 pl-10"
          src={attraction.image}
          alt={attraction.name}
          width={450}
          height={500}
      
          />
      </div>
      <div className="w-1/2 text-justify ">
        <h2>
            {attraction.description}
        </h2>
      </div>
      </div>

      <div className="flex justify-between w-85 mr-20 ml-20 pl-20 pr-20">
        <span>
        <i className="ri-map-pin-line" />
          {" "}
          {attraction.Location.country} - {attraction.Location.city}
        </span>
        <span> Precio: {attraction.price} $ </span>
        <span> Ranking: {attraction.ranking}</span>
      </div>
    </div>
  );
}
