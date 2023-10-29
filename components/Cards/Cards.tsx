"use client"
import Card from '../card/Card';
import style from './Cards.module.css';
import { useEffect, useState } from 'react';
import Paginacion from '../paginacion/Paginacion';
import React, { FC } from 'react';

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
  interface Props {
   data:attractions[];
   flag:boolean;
   setFlag: (newState: boolean) => void
  }

export default function Cards (props: Props) {
   //Paginado
   const [page, setPage ] = useState(1) //page es la pagina actual
   const [pageSize, setPageSize] = useState(4)
   const pageAmount = Math.ceil(props.data.length / pageSize) // cantidad de pag s/cant de cards
   useEffect(()=>{
      if(props.flag) {
         setPage(1)
         props.setFlag(false)
      }
   }, [props.flag])
   
   return !props.data ? <h1 className={style.h1}>Cargando las atracciones...</h1>
   :  (
      <div>
         
          
         <div className={style.container}>
            {props?.data.slice((page-1) * pageSize,((page-1) * pageSize) + pageSize)
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
            })}
         </div>
         <div className={style.page}>
            <Paginacion page= {page} setPage= {setPage} pageAmount= {pageAmount}/>
         </div>
      </div>
   )
   
}