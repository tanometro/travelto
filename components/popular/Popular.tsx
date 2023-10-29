import Image from "next/image";
import styles from "./popular.module.css";
import "remixicon/fonts/remixicon.css";
import axios from "axios";
import { useEffect, useState } from "react";
import popular_mountain from '../../public/images/popular-mountain.jpg'
import popular_lake from '../../public/images/popular-lake.jpg'
import popular_forest from '../../public/images/popular-forest.jpg'
import { emit } from "process";


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
export default function Popular() {
    const [attraction, setAttraction] = useState<attractions[]>([]) //trae las attractions 
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
    return (
        <>
            <h2 className={styles.section__title}>
                Disfrute de las atracciones más populares
            </h2>
            <div className={`${styles.popular__container} ${styles.container} ${styles.grid}`}>
                {attraction.slice(0, 3).map((e)=>{
                    return (
                        <article className={styles.popular__card}>
                        <div className={styles.popular__image}>
                        <Image
                            src={e.image}
                            width={600}
                            height={800}
                            alt="popular image"
                            className={styles.popular__img}
                        />
                        <div className={styles.popular__shadow} />
                        </div>
                        <h2 className={styles.popular__title}>{e.name}</h2>
                        <div className={styles.popular__location}>
                            <i className="ri-map-pin-line" />
                            <span>{e.country} - {e.city}</span>
                        </div>
                        </article>
                        )
                })}
                
            </div>
        </>
    )
}
/* {props?.data.slice((page-1) * pageSize,((page-1) * pageSize) + pageSize)
    .map(({ id, name, city,country,ranking, price,image}, index)=> {
       
       return <Card 
          key = {index}
          id={id}
          name={name}
          city= {city}
          country= {country}
          ranking= {ranking}
          price= {price}
          image= {image}
          
       />
    })} */