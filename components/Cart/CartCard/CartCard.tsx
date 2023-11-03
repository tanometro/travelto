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
    <div className="flex gap-10 p-5 justify-between w-full bg-slate-500 bg-opacity-70 rounded-md max-w-[50rem]">
      <div className="w-[300px] h-[200px] rounded-md overflow-hidden">
        <Image
          src={image}
          alt={`Image${id}`}
          width={300}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-1">
        <ul className="w-[300px]">
          <li>
            <h1 className="text-xl">{name}</h1>
          </li>
          <li>
            Location: {city} - {country}
          </li>
          <li>Hours: {hours}</li>
          <li>Duration: {duration}</li>
          <li>
            Price: <span className="font-bold">${price}</span>
          </li>
          <br />
          <Link href={googleMapsLink}>
            <i className="ri-map-pin-line"></i> Show in google maps
          </Link>
        </ul>
        <div className="flex-col self-end">
          <h3 className="mb-5">
            Added to Cart:
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
