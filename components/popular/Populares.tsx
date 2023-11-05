import Image from "next/image";
import styles from "./populares.module.css";
import "remixicon/fonts/remixicon.css";
import React, { useEffect, useState } from "react";
import { AttractionInterface } from "@/src/interfaces";
import Link from "next/link";
import  getAllAttractions  from "@/src/requests/getAllAttractions"

export default function Popular() {
  const [attraction, setAttraction] = useState<AttractionInterface[]>([]); //trae las attractions ??? solo crea un estado esto!

  const getDatos = async () => {
    try {
      let res = await getAllAttractions();
      let datos = res.data;
      if (!datos.length) {
        window.alert("No se encuentran datos");
      } else {
        setAttraction(datos);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDatos();
    
  }, []);
  const filter = attraction.sort((a, b) => {
    if(a.ranking > b.ranking) {
        return 1;
    }
    if(b.ranking > a.ranking) {
        return -1;
    }
    return 0;
    })
  
  return (
    <>
      <h2 className={styles.section__title}>
        Disfrute de las atracciones más populares
      </h2>
      <div
        className={`${styles.popular__container} ${styles.container} ${styles.grid}`}
      >
        {filter.slice(0, 3).map((e) => {
          return (
            <article key={e.id}className={styles.popular__card}>
              <Link href={`/Detail/${e.id}`}>
              <div className="relative mb-[1rem] overflow-hidden w-full h-[180px] hover:scale-105 transition-all duration-300 ease-in-out">
                <Image
                  src={e.image}
                  layout="fill"
                  alt="popular image"
                  className={styles.popular__img}
                />
                <div className={styles.popular__shadow} />
              </div>
              </Link>
              <h2 className={styles.popular__title}>{e.name}</h2>
              <div className={styles.popular__location}>
                <i className="ri-map-pin-line" />
                <div className="flex justify-around">
                <span>
                  {e.Location.country} - {e.Location.city}
                </span>
                <span className="ml-12">
                  Ranking: {e.ranking}
                </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
