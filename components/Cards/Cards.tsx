"use client"
import Card from '../card/Card';
import style from './Cards.module.css';
import { useState } from 'react';
import Paginacion from '../paginacion/Paginacion';
import React, { FC } from 'react';

interface Props {
      id: number;
      name: string;
      isActive: boolean;
      hours: string;
      location: string;
      latitude: string;
      longitude: string;
      price: string;
      duration: string;
      description: string
  }

export default function Cards (props: Props) {
   //Paginado
   console.log(props.data)
   const [page, setPage ] = useState(1) //page es la pagina actual
   const [pageSize, setPageSize] = useState(4)
   const pageAmount = Math.ceil(props.data.length / pageSize) // cantidad de pag s/cant de cards

   return !props.data ? <h1 className={style.h1}>Cargando las atracciones...</h1>
   :  (
      <div>
         
         <div className={style.page}>
            <Paginacion page= {page} setPage= {setPage} pageAmount= {pageAmount}/>
         </div>
         <div className={style.container}>
            {props?.data.slice((page-1) * pageSize,((page-1) * pageSize) + pageSize)
            .map(({ id, name, location}, index)=> {
               
               return <Card 
                  key = {index}
                  id={id}
                  name={name}
                  location= {location}
                  
               />
            })}
         </div>
         <div className={style.page}>
            <Paginacion page= {page} setPage= {setPage} pageAmount= {pageAmount}/>
         </div>
      </div>
   )
   
}