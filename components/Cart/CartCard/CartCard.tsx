import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

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
  } = attraction;
  const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
  return (
    <div className="flex">
      <div className="w-[300px] h-[180px]">
        <Image
          src={image}
          alt={`Image${id}`}
          width={200}
          height={180}
          layout="responsive"
        />
      </div>
      <div>
        <ul>
          <li>{name}</li>
          <li>{city}</li>
          <li>{country}</li>
          <li>{hours}</li>
          <li>{price}</li>
          <li>{duration}</li>
          <Link href={googleMapsLink}>Ver en google maps</Link>
        </ul>
      </div>
    </div>
  );
}
