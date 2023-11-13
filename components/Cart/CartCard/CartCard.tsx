import QuantitySelector from "@/components/QuantitySelector/QuantitySelector";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import "remixicon/fonts/remixicon.css";

export default function CartCard({ attraction }): ReactNode {
  const {
    id,
    name,
    hours,
    city,
    country,
    latitude,
    longitude,
    price,
    duration,
    image,
    quantity,
  } = attraction;
  const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
  
  return (
    <div className="flex flex-col w-[20rem] md:flex-row gap-10 p-5 center lg:w-full md:w-[35rem] bg-slate-500 bg-opacity-90 rounded-md max-w-[50rem]">
      <div className="w-full h-full lg:w-[300px] lg:h-[200px] md:w-[260px] md:h-[240px] rounded-md overflow-hidden">
        <Image
          src={image}
          alt={`Image${id}`}
          width={300}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col md:flex-row flex-1 gap-5">
        <ul className="w-[200px] lg:w-[300px]">
          <li>
            <h1 className="text-xl">{name}</h1>
          </li>
          <li>
            Lugar: {city} - {country}
          </li>
          <li>Horas: {hours}</li>
          <li>Duración: {duration}</li>
          <li>
            Precio: <span className="font-bold">${price}</span>
          </li>
          <br />
          <Link href={googleMapsLink}>
            <i className="ri-map-pin-line"></i> Ver en google maps
          </Link>
        </ul>
        <div className="flex-col justify-center md:self-end">
          <h3 className="mb-5">
            Agregado:
            <br />
            <div className="flex gap-2 mt-2">
              <QuantitySelector attraction={attraction} />
            </div>
          </h3>
          <h1 className="text-xl">Sub-total: ${price * quantity}</h1>
        </div>
      </div>
    </div>
  );
}
