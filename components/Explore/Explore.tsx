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
  
  interface attractions {
    id: number;
    name: string;
    isActive: boolean;
    hours: string;
    city: string;
    country:string;
    latitude: string;
    ranking:number;
    longitude: string;
    price: number;
    duration: string;
    image: string
}
  
  /* const cities = locations.locations.map((location) => {
    return location.city;
  });
  const countr = locations.locations.map((location) => {
    return location.country;
  }); */
  let [state, setState] = useState({
    order: "",
    city: "",
    country: ""
    
})   //estado de los select...
  const [countrySelected, setCountrySelected ] = useState<string>("")
  const [citiesPerCountry, setCitiesPerCountry] = useState<string[]>([])
  const [flag, setFlag] = useState<boolean>(false)
  const [allAttraction, setAllAttraction] = useState<attractions[]>([]) //todas las attraction
  const [attraction, setAttraction] = useState<attractions[]>([]) //attraction para filter
  
  const getDatos =async () => {
    try {
      let res = await axios.get(`http://localhost:3001/attractions`)
      let datos= res.data
      console.log(datos);    
      if (!datos.length) {
        window.alert("No se encuentran datos")
      } else {
        setAttraction(datos)
        setAllAttraction([...datos])      
      }
      } catch (error) {
          console.log(error); 
      }
    }    
  
  useEffect(()=> {  
    getDatos()
  }, [])
 
  useEffect(()=> {
    
    console.log(state)
    let orderAndFilter = [...attraction]
    
    //Ordenar Por country ...aprobado
    if(state.country !== "") {
      if (state.country !== "All") {
          orderAndFilter= allAttraction
          orderAndFilter =  orderAndFilter.filter(v => v.country.includes(state.country))
      }  
    }  
    //Ordenar Por city ...aprobado
    if(state.city !== "" ) {
      if (state.city !== "All" ) {
        orderAndFilter= allAttraction
        orderAndFilter =  orderAndFilter.filter(v => v.city.includes(state.city))
    }
    } 
    //Ordenar Por name alfabeticamente y por rating y precios asc y desc...aprobado
    if (state.order !== "") {
    if (state.order === "A") {
        orderAndFilter = orderAndFilter.sort((a, b) => {
            if (a.name < b.name ) {
                return -1
            } else if (a.name > b.name) {
                return 1
            } else { 
                return 0
            }
    })
    
    }
    if (state.order === "D") {
        orderAndFilter = orderAndFilter.sort((a, b) => {
            if (a.name < b.name ) {
                return 1
            } else if (a.name > b.name) {
                return -1
            } else { 
                return 0
            }
    })
    
    }  
    if(state.order === "RD") {
        orderAndFilter = orderAndFilter.sort((a, b) => {
            if(a.ranking > b.ranking) {
                return -1;
            }
            if(b.ranking > a.ranking) {
                return 1;
            }
            return 0;
            })
    }
    if(state.order === "RA") {
        orderAndFilter = orderAndFilter.sort((a, b) => {
            if(a.ranking > b.ranking) {
                return 1;
            }
            if(b.ranking > a.ranking) {
                return -1;
            }
            return 0;
            })
    }
    if(state.order === "PD") {
      orderAndFilter = orderAndFilter.sort((a, b) => {
          if(a.price > b.price) {
              return -1;
          }
          if(b.price > a.price) {
              return 1;
          }
          return 0;
          })
  }
  if(state.order === "PA") {
      orderAndFilter = orderAndFilter.sort((a, b) => {
          if(a.price > b.price) {
              return 1;
          }
          if(b.price > a.price) {
              return -1;
          }
          return 0;
          })
    }
    //Por rangos de precios
    if (state.order === "R1") {
      orderAndFilter = orderAndFilter.filter(e => {
        return e.price <= 1000 
      })
    } 
    if (state.order === "R2") {
      orderAndFilter = orderAndFilter.filter(e => {
        return e.price >= 1000 && e.price <= 2000 
      })
    }
    if (state.order === "R3") {
      orderAndFilter = orderAndFilter.filter(e => {
        return e.price >= 2000 
      })
    }  
  }
  setAttraction([...orderAndFilter])
    },[state])
  
  //Haciendo los arrays de city y country para los select
  const countr = allAttraction.map(e => {
      return e.country
    }).sort((a, b) => {
      if (a < b ) {
        return -1
      } else if (a > b) {
        return 1
      } else { 
        return 0
      }
    }).reduce<string[]>((ac, el) => {
      if (! ac.find(dato => dato === el)) {
          ac.push(el)
      }
      return ac
  } , [])
    
    
   //filtrado de ciudades por pais
   const getCities = (e)=> {
    const filterCities = allAttraction.filter((dato)=> {
      return dato.country === e
    })
    const cities = filterCities.map(e => {
      return e.city
    }).sort((a, b) => {
      if (a < b ) {
        return -1
      } else if (a > b) {
        return 1
      } else { 
        return 0
      }
    }).reduce<string[]>((ac, el) => {
      if (! ac.find(dato => dato === el)) {
          ac.push(el)
      }
      return ac
  } , [])
  setCitiesPerCountry(cities)   
}
  
  //trayendo los select seleccionados
  const handleChange = e => {
    let newState = {
        ...state,
        [e.target.name]: e.target.value
        
    }
    console.log(allAttraction);
    if (e.target.name === "country" && e.target.value !== "" ) {
      getCities(e.target.value)
    }
   
    setFlag(true);
    setAttraction([...allAttraction])
    setState(newState) 
  
} 

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
          <div className= "flex justify-center gap-16 items-center my-6">
            <h2 className={styles.section__title}>
              Comience su viaje aqui <i className="ri-arrow-right-line" />
            </h2> 
            <a href="#explore" className={styles.btn + " w-[15em] h-[2em] text-center"} >
                    Busque su Atraccion <i className="ri-search-2-line" />
            </a>
          </div>
        </div>
        
        <div className= {styles.container_select}>
                    <select className= {styles.select} name="order" id="" onChange = { handleChange }>
                        <option className= {styles.option} value= "">Order</option>
                        <option className= {styles.option} value= "A">A-Z</option>
                        <option className= {styles.option} value= "D">Z-A</option>
                        <option className= {styles.option} value="RA">Ranking Asc.</option>
                        <option className= {styles.option} value="RD">Ranking Desc.</option>
                        <option className= {styles.option} value="PA">Precio Asc.</option>
                        <option className= {styles.option} value="PD">Precio Desc.</option>
                        <option className= {styles.option} value="R1">Precio 0-1000</option>
                        <option className= {styles.option} value="R2">Precio 1000-2000</option>
                        <option className= {styles.option} value="R3">Precio más de 2000</option>
                        
                    </select>
                    <select className= {styles.select} name="country" id="" onChange = { handleChange }>
                        <option className= {styles.option} value="All">Todos los paises </option>
                        {countr.map((dato, index) => (
                            <option className= {styles.option} key= {index} value={dato}>{dato}</option>          
                        ))}
                        
                    </select>
                    <select className= {styles.select} name="city" id="" onChange = { handleChange }>
                        {citiesPerCountry.length && 
                          <>
                            <option className= {styles.option} value="All">Todas las ciudades </option>
                            {citiesPerCountry.map((dato, index) => (
                            <option className= {styles.option} key= {index} value={dato}>{dato}</option>          
                            ))}
                          </>
                        }
                        {!citiesPerCountry.length && 
                          <>
                            <option className= {styles.option} disabled selected value="">Seleccione País </option>
                          
                          </>
                        }
                        
                        
                    </select>
                    
                </div>
        <div>
            <Cards data={attraction} flag= {flag} setFlag = {setFlag} />
          </div>
      
      
    </div>
  );
}
