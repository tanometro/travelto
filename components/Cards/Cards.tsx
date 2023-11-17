"use client";
import Card from "../card/Card";
import React, { useState } from "react";
import Paginacion from "../paginacion/Paginacion";
import { PropCards } from "@/src/interfaces";


export default function Cards(props: PropCards) {
  //Paginado
  const [page, setPage] = useState(1); //page es la pagina actual
  const [pageSize, setPageSize] = useState(4);
  const pageAmount = Math.ceil(props.data.length / pageSize); // cantidad de pag s/cant de cards

  return props.data.length === 0 ? (
    <h1 className="text-center text-2xl mt-20 pt-20 mb-20 pb-10">No existen atracciones para esa busqueda</h1>
  ) : (
    <div className="mb-16 xl:mb-0">
      <div className="flex justify-center items-center flex-wrap w-[90vw] my-4 mx-auto">
        {props?.data
          .slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
          .map(
            (
              {
                id,
                name,
                Location:{city, country},
                hours,
                duration,
                ranking,
                price,
                image,
                longitude,
                latitude,
              },
              index
            ) => {
              /* console.log(hours, duration); */
              return (
                <Card
                  key={id}
                  id={id}
                  name={name}
                  city={city}
                  country={country}
                  ranking={ranking}
                  hours={hours}
                  duration={duration}
                  price={price}
                  image={image}
                  longitude={longitude}
                  latitude={latitude}
                />
              );
            }
          )}
      </div>
      <div className="text-center">
        <Paginacion page={page} setPage={setPage} pageAmount={pageAmount} />
      </div>
    </div>
  );
}
