'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import "remixicon/fonts/remixicon.css";
import { baseURL } from "@/constant";
import Link from "next/link";



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

export default function DetailID ({params}) {
    
    const { id } = params;
    const [attraction, setAttraction] = useState<attractions>({
        id: 0,
    name: "",
    isActive: false,
    hours: "",
    city: "",
    country:"",
    latitude: "",
    ranking:0,
    longitude: "",
    price: 0,
    duration: "",
    image: ""
    })
    const getDatos =async () => {
        try {
            let res = await axios.get(`http://localhost:3001/attractions/${id}`)
        let datos= res.data
        console.log(datos);    
        if (!datos.name) {
                window.alert("No existe esta detalle de atraccion")
            } else {
                setAttraction(datos)
                
            }
        } catch (error) {
            console.log(error); 
        }
    }    
    useEffect(()=> {
        getDatos()
    }, [id])
    
    
    return (
        <>
            <div className="relative ml-20 mr-20 mt-10 pl-20">
            <h1 className= "text-center text-2xl">{attraction.name}</h1>
                <div className="flex justify-between mi-20 pl-20 mr-20 pl-20">
                <i className="ri-map-pin-line" />
                    <div className="flex gap-5 ml-10 mr-6">
                    
                    <i className="ri-shopping-cart-line "></i>
                    <Link href= "/" className="bg-white color:black w-6 text-center">X </Link>
                </div>
                </div>
                <div className= "relative mb-[1rem] overflow-hidden w-[520px]] h-[440px] mr-20 pr-5">
                <Image
                    className= "ml-10 pl-10"
                    src= {attraction.image} layout= "fill"
                    alt={attraction.name}
                    />
                </div>
            
                <div className="flex justify-between w-85 mr-20 ml-20 pl-20 pr-20">
                    
                    <span> {attraction.country} - {attraction.city}</span>
                    <span> Precio: {attraction.price} $ </span>
                    <span> Ranking: {attraction.ranking}</span>
                </div>
            </div>
            
        </>
    )
}