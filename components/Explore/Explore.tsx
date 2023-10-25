"use client"
import Image from 'next/image';
import styles from './explore.module.css';
import explore_beach from '../../public/images/explore-beach.jpg'
import Data from '@/public/Attractions.json'
import Cards from '@/components/Cards/Cards'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Explore () {
    
    const [attraction, setAttraction] = useState([])
   
    const getDatos =async () => {
        try {
            let res = await axios.get(`http://localhost:3001/attractions`)
        let datos= res.data
        console.log(datos);    
        if (!datos.name) {
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
        <div className={styles.explore__container}>
                <div className={`${styles.explore__content} ${styles.contaimer} ${styles.grid}`}>
                    <div className={styles.explore__data}>
                    
                        <h2 className={styles.section__title}>
                    Explore las <br />
                    mejores Atracciones
                    </h2>
                    
                    <div>
                        <a href="#" className={styles.button}>
                            Por ciudad <i className="ri-arrow-right-line" />
                        </a>
                        <a href="#" className={styles.button}>
                            Mejores Precios <i className="ri-arrow-right-line" />
                        </a>
                        <a href="#" className={styles.button}>
                            Favoritos <i className="ri-arrow-right-line" />
                        </a>
                    </div>
                    <div>
                        <Cards data= {attraction} />
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
    )
}