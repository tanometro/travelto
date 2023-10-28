"use client";
import Image from "next/image";
import styles from "./explore.module.css";
import explore_beach from "../../public/images/explore-beach.jpg";
const data = require("@/public/Attractions.json");
import Cards from "@/components/Cards/Cards";
import locations from "../../public/Locations.json";
import { useState } from "react";

export default function Explore() {
  const cities = locations.locations.map((location) => {
    return location.city;
  });
  const countr = locations.locations.map((location) => {
    return location.country;
  });
  let [state, setState] = useState({
    order: "",
    city: "",
    country: ""
    
})
  
  const [attraction, setAttraction] = useState([])
   
  const getDatos =async () => {
      try {
          let res = await axios.get(`http://localhost:3001/attractions`)
      let datos= res.data
      console.log(datos);    
      if (!datos.length) {
              window.alert("No se encuentran datos")
          } else {
              setAttraction(datos)
              
          }
      } catch (error) {
          console.log(error); 
      }
  }    
  useEffect(()=> {
      getDatos()
  }, [])
 
  const handleChange = e => {
    let newState = {
        ...state,
        [e.target.name]: e.target.value
        
    }
  }
  /* const [filteredData, setFilteredData] = useState(data.attractions);

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
  }; */

  return (
    <div className={styles.explore__container}>
      <div
        className={`${styles.explore__content} ${styles.contaimer} ${styles.grid}`}
      >
        <div className={styles.explore__data}>
          <h2 className={styles.section__title}>
<<<<<<< HEAD
            Comience su viaje aqui
          </h2> 
=======
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
>>>>>>> 50cd366c2c98a10356e7fcb23198865f838b8b53
        </div>
        <div className= {styles.container_select}>
                    <select className= {styles.select} name="order" id="" onChange = { handleChange }>
                        <option className= {styles.option} value= "">Order</option>
                        <option className= {styles.option} value= "A">A-Z</option>
                        <option className= {styles.option} value= "D">Z-A</option>
                        <option className= {styles.option} value="RA">Ranking Asc.</option>
                        <option className= {styles.option} value="RD">Ranking Desc.</option>
                        
                    </select>
                    
                    {/* <select className= {styles.select} name="origin" id="" onChange = { handleChange }>
                        <option className= {styles.option} value="ALL">ALL</option>
                        <option className= {styles.option} value="API"> Only API</option>
                        <option className= {styles.option} value="DB">Only DB</option>
                    </select> */}
                    <select className= {styles.select} name="city" id="" onChange = { handleChange }>
                        <option className= {styles.option} value="All">Todas las ciudades </option>
                        {cities.map((dato, index) => (
                            <option className= {styles.option} key= {index} value={dato}>{dato}</option>          
                        ))}
                        
                    </select>
                    <select className= {styles.select} name="country" id="" onChange = { handleChange }>
                        <option className= {styles.option} value="All">Todos los paises </option>
                        {countr.map((dato, index) => (
                            <option className= {styles.option} key= {index} value={dato}>{dato}</option>          
                        ))}
                        
                    </select>
                </div>
        
        
        <div>
            <Cards data={attraction} />
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
