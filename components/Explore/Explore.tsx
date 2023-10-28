"use client";
import Image from "next/image";
import styles from "./explore.module.css";
import explore_beach from "../../public/images/explore-beach.jpg";
const data = require("@/public/Attractions.json");
import Cards from "@/components/Cards/Cards";
import locations from "../../public/Locations.json";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "@/constant";

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

  console.log(cities);
  console.log(countries);

  function addOptions(domElement, array) {
    var select = document.getElementsByName(domElement)[0];

    array.sort().map((e) => {
      var option = document.createElement("option");
      option.value = e;
      option.text = e;
      select.appendChild(option);
    });
  }
  useEffect(() => {
    addOptions("cities", cities);
  });

  useEffect(() => {
    addOptions("countries", countries);
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
            Comience su viaje aqui
          </h2> 
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
