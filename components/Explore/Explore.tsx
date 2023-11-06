"use client";
import Image from "next/image";
import styles from "./explore.module.css";
import explore_beach from "../../public/images/explore-beach.jpg";
import Cards from "@/components/Cards/Cards";
import { useEffect, useState, useRef, ChangeEvent } from "react";
import { AttractionInterface } from "@/src/interfaces";
import getAllAttractions from "@/src/requests/getAllAttractions";

export default function Explore() {
  let [state, setState] = useState({
    order: "",
    city: "",
    country: "",
    priceRange: "",
  });
  const [citiesPerCountry, setCitiesPerCountry] = useState<string[]>([]);
  const [flag, setFlag] = useState<boolean>(false);
  const [allAttraction, setAllAttraction] = useState<AttractionInterface[]>([]); //todas las attraction
  const [attraction, setAttraction] = useState<AttractionInterface[]>([]); //attraction para filter

  const getDatos = async () => {
    try {
      let res = await getAllAttractions();
      let datos = res.data;
      setAttraction(datos);
      setAllAttraction([...datos]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDatos();
  }, []);

  useEffect(() => {
    let orderAndFilter = [...attraction];

    //Ordenar Por country ...aprobado
    if (state.country !== "") {
      if (state.country !== "All") {
        orderAndFilter = allAttraction;
        orderAndFilter = orderAndFilter.filter((v) =>
          v.Location.country.includes(state.country)
        );
      }
    }
    //Ordenar Por city ...aprobado
    if (state.city !== "") {
      if (state.city !== "All") {
        orderAndFilter = allAttraction;
        orderAndFilter = orderAndFilter.filter((v) =>
          v.Location.city.includes(state.city)
        );
      }
    }
    //Ordenar Por name alfabeticamente y por rating y precios asc y desc...aprobado
    if (state.order !== "") {
      if (state.order === "A") {
        orderAndFilter = orderAndFilter.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          } else if (a.name > b.name) {
            return 1;
          } else {
            return 0;
          }
        });
      }
      if (state.order === "D") {
        orderAndFilter = orderAndFilter.sort((a, b) => {
          if (a.name < b.name) {
            return 1;
          } else if (a.name > b.name) {
            return -1;
          } else {
            return 0;
          }
        });
      }
      if (state.order === "RD") {
        orderAndFilter = orderAndFilter.sort((a, b) => {
          if (a.ranking > b.ranking) {
            return -1;
          }
          if (b.ranking > a.ranking) {
            return 1;
          }
          return 0;
        });
      }
      if (state.order === "RA") {
        orderAndFilter = orderAndFilter.sort((a, b) => {
          if (a.ranking > b.ranking) {
            return 1;
          }
          if (b.ranking > a.ranking) {
            return -1;
          }
          return 0;
        });
      }
      if (state.order === "PD") {
        orderAndFilter = orderAndFilter.sort((a, b) => {
          if (a.price > b.price) {
            return -1;
          }
          if (b.price > a.price) {
            return 1;
          }
          return 0;
        });
      }
      if (state.order === "PA") {
        orderAndFilter = orderAndFilter.sort((a, b) => {
          if (a.price > b.price) {
            return 1;
          }
          if (b.price > a.price) {
            return -1;
          }
          return 0;
        });
      }
    }
    //Por rangos de precios
    if (state.priceRange === "R1") {
      orderAndFilter = orderAndFilter.filter((e) => {
        return Number(e.price) <= 1000;
      });
    }
    if (state.priceRange === "R2") {
      orderAndFilter = orderAndFilter.filter((e) => {
        return Number(e.price) >= 1000 && Number(e.price) <= 2000;
      });
    }
    if (state.priceRange === "R3") {
      orderAndFilter = orderAndFilter.filter((e) => {
        return Number(e.price) >= 2000;
      });
    }

    setAttraction([...orderAndFilter]);
  }, [state]);

  //Haciendo los arrays de city y country para los select
  const countr = allAttraction
    .map((e) => {
      return e.Location.country;
    })
    .sort((a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    })
    .reduce<string[]>((ac, el) => {
      if (!ac.find((dato) => dato === el)) {
        ac.push(el);
      }
      return ac;
    }, []);

  //filtrado de ciudades por pais
  const getCities = (e) => {
    const filterCities = allAttraction.filter((dato) => {
      return dato.Location.country === e;
    });
    const cities = filterCities
      .map((e) => {
        return e.Location.city;
      })
      .sort((a, b) => {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      })
      .reduce<string[]>((ac, el) => {
        if (!ac.find((dato) => dato === el)) {
          ac.push(el);
        }
        return ac;
      }, []);
    setCitiesPerCountry(cities);
  };

  //trayendo los select seleccionados
  const handleChange = (e) => {
    let newState = {
      ...state,
      [e.target.name]: e.target.value,
    };
    console.log(allAttraction);
    if (e.target.name === "country" && e.target.value !== "") {
      getCities(e.target.value);
    }

    setFlag(true);
    setAttraction([...allAttraction]);
    setState(newState);
  };
  // SearchBar filtro por name, busqueda parcial por letras de coincidencia
  const debounceRef = useRef<NodeJS.Timeout>();
  const onQueryChanged = (e: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    const value = e.target.value;
    debounceRef.current = setTimeout(() => {
      const search = allAttraction.filter((e) => {
        return e.name.toLowerCase().includes(value.toLowerCase());
      });
      console.log(search);
      setAttraction(search);
    }, 1000);
  };

  return (
    <div className={styles.explore__container}>
      <div
        className={`${styles.explore__content} ${styles.contaimer} ${styles.grid}`}
      >
        <div className={styles.explore__data}>
          <div className={styles.explore__image}>
            <Image
              src={explore_beach}
              alt="explore image"
              className={styles.explore__img}
            />
            <div className={styles.explore__shadow} />
          </div>
        </div>
        <div className="flex justify-center gap-16 items-center my-6">
          <h2 className={styles.section__title}>
            Comience su viaje aqui <i className="ri-arrow-right-line" />
          </h2>
          <div>
            <input
              type="search"
              placeholder="Busque su Atracción"
              className={styles.btn + " w-[15em] h-[2em] text-center"}
              onChange={onQueryChanged}
            />

            <i className="ri-search-2-line" />
          </div>
        </div>
      </div>

      <div className="flex justify-around items-center">
        <select
          name="order"
          id=""
          onChange={handleChange}
          className="bg-black bg-opacity-70 border border-gray-300 text-white text-sm text-center rounded-lg focus:ring-gray-500 focus:border-gray-500 block  p-2.5 dark:bg-black-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
        >
          <option value="">Orden</option>
          <option value="A">A-Z</option>
          <option value="D">Z-A</option>
          <option value="RA">Ranking Asc.</option>
          <option value="RD">Ranking Desc.</option>
          <option value="PA">Precio Asc.</option>
          <option value="PD">Precio Desc.</option>
        </select>

        <select
          id="priceRange"
          name="priceRange"
          onChange={handleChange}
          className="bg-black bg-opacity-70 border border-gray-300 text-white text-sm text-center rounded-lg focus:ring-gray-500 focus:border-gray-500 block  p-2.5 dark:bg-black-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
        >
          <option selected>Rango de precios</option>
          <option value="R1">De 0-1000</option>
          <option value="R2">De 1000-2000</option>
          <option value="R3">Más de 2000</option>
        </select>

        <select
          name="country"
          id=""
          onChange={handleChange}
          className="bg-black bg-opacity-70 border border-gray-300 text-white text-sm text-center rounded-lg focus:ring-gray-500 focus:border-gray-500 block  p-2.5 dark:bg-black-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
        >
          <option value="All">Todos los paises </option>
          {countr.map((dato, index) => (
            <option key={index} value={dato}>
              {dato}
            </option>
          ))}
        </select>

        {!citiesPerCountry.length ? (
          <select
            name="city"
            onChange={handleChange}
            data-tooltip-target="tooltip-default"
            disabled
            id="countries_disabled"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Ciudades </option>
          </select>
        ) : (
          citiesPerCountry.length && (
            <select
              name="city"
              id=""
              onChange={handleChange}
              className="bg-black bg-opacity-70 border border-gray-300 text-white text-sm text-center rounded-lg focus:ring-gray-500 focus:border-gray-500 block  p-2.5 dark:bg-black-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
            >
              <option value="All">Ciudades </option>
              {citiesPerCountry.map((dato, index) => (
                <option key={index} value={dato}>
                  {dato}
                </option>
              ))}
            </select>
          )
        )}
      </div>
      <div>
        <Cards data={attraction} flag={flag} setFlag={setFlag} />
      </div>
    </div>
  );
}
