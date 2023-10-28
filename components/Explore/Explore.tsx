"use client";
import Image from "next/image";
import styles from "./explore.module.css";
import explore_beach from "../../public/images/explore-beach.jpg";
const data = require("@/public/Attractions.json");
import Cards from "@/components/Cards/Cards";
import locations from "../../public/Locations.json";
import { useState } from "react";

export default function Explore() {
  const [filteredData, setFilteredData] = useState(data.attractions);

  const cities = locations.locations.map((location) => {
    return location.city;
  });
  const countr = locations.locations.map((location) => {
    return location.country;
  });
  const countries = countr.filter((item, index) => {
    return countr.indexOf(item) === index;
  });

  const orderForPrice = (a, b) => {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  };

  return (
    <div className={styles.explore__container}>
      <div
        className={`${styles.explore__content} ${styles.contaimer} ${styles.grid}`}
      >
        <div className={styles.explore__data}>
          <h2 className={styles.section__title}>
            Explore The <br />
            Best Attractions
          </h2>

          <div>
            <div className="flex flex-row justify-center">
              <div>
                <select
                  name="countries"
                  className={styles.button}
                  onChange={(event) => {
                    const selectedValue = String(event.target.value);
                    const resultado = filteredData.filter(
                      (e) => e.country == selectedValue
                    );
                    setFilteredData(resultado);
                  }}
                >
                  <option
                    value=""
                    className=" bg-black bg-opacity-60 flex flex-col"
                  >
                    Selecciona un país
                  </option>
                  {countries !== undefined && countries.length > 0 ? (
                    countries.sort().map((country, index) => (
                      <option
                        className=" bg-black bg-opacity-60 flex flex-col"
                        key={index}
                        value={country}
                      >
                        {country}
                      </option>
                    ))
                  ) : (
                    <option value="">No hay países disponibles</option>
                  )}
                </select>
              </div>
              <div>
              <select
                  name="cities"
                  className={styles.button}
                  onChange={(event) => {
                    const selectedValue = String(event.target.value);
                    const resultado = filteredData.filter(
                      (e) => e.city == selectedValue
                    );
                    setFilteredData(resultado);
                  }}
                >
                  <option
                    value=""
                    className=" bg-black bg-opacity-60 flex flex-col"
                  >
                    Selecciona una Ciudad
                  </option>
                  {cities !== undefined && cities.length > 0 ? (
                    cities.sort().map((city, index) => (
                      <option
                        className=" bg-black bg-opacity-60 flex flex-col"
                        key={index}
                        value={city}
                      >
                        {city}
                      </option>
                    ))
                  ) : (
                    <option value="">No hay Ciudades disponibles</option>
                  )}
                </select>
              </div>
            </div>
            <button
              className={styles.button}
              onClick={() => {
                var aux = filteredData;
                aux.sort(orderForPrice);
                setFilteredData(aux);
              }}
            >
              Menor Precio <i className="ri-arrow-right-line" />
            </button>
            <a href="#" className={styles.button}>
              Ranking <i className="ri-arrow-right-line" />
            </a>
            <button
              className={styles.cleanbutton}
              onClick={() => {
                setFilteredData(data.attractions);
              }}
            >
              Limpiar Filtros
              <i className="ri-arrow-left-line" />
            </button>
          </div>
          <div>
            <Cards data={filteredData} />
          </div>
        </div>
      </div>
      <div className={styles.explore__image}>
        <Image
          src={explore_beach}
          alt="explore image"
          className={styles.explore__img}
        />
        <div className={styles.explore__shadow} />
      </div>
    </div>
  );
}
