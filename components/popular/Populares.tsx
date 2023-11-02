import Image from "next/image";
import styles from "./populares.module.css";
import "remixicon/fonts/remixicon.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "@/constant";
import { AttractionInterface } from "@/src/interfaces";
import Link from "next/link";

export default function Popular() {
  const [attraction, setAttraction] = useState<AttractionInterface[]>([]); //trae las attractions ??? solo crea un estado esto!

  const getDatos = async () => {
    try {
      let res = await axios.get(`${baseURL}/attractions`);
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
  return (
    <>
      <h2 className={styles.section__title}>
        Disfrute de las atracciones más populares
      </h2>
      <div
        className={`${styles.popular__container} ${styles.container} ${styles.grid}`}
      >
        {attraction.slice(0, 3).map((e) => {
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
                <span>
                  {e.Location.country} - {e.Location.city}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
