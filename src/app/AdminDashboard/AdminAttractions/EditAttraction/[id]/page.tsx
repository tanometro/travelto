"use client";
import AdminAttractionForm from "@/src/Components/AdminComponents/Attractions/AdminAttractonForm";
<<<<<<< HEAD
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { baseURL } from "@/constant";
import { useParams } from "next/navigation";
import { getOnEditAttraction, setOnEditAttraction } from "@/src/redux/features/attractionsSlice";
=======
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import getAttractionByid from "@/src/requests/getAttractionById";
import { AdminAttractionFormInterface } from "@/src/interfaces";
>>>>>>> 6c470ef56aa19ddad0e27d6981df3bd15c12474a


export default function EditAttraction() {
  const params = useParams();
<<<<<<< HEAD

  const attractionId = params.id
=======
  const [attraction, setAttraction] = useState<AdminAttractionFormInterface>({
    name: "",
    description:"",
    latitude: "",
    longitude: "",
    price: "",
    hours: "",
    duration: "",
    image: "",
    isActive: "",
  })
  // Location no puedo editar?


  
  const attractionId = Array.isArray(params.id)
  ? parseInt(params.id[0], 10)
  :parseInt(params.id, 10)
  // const attractionId = params.id
>>>>>>> 6c470ef56aa19ddad0e27d6981df3bd15c12474a

  useEffect(()=> {
    async function fetchData () {
      try {
<<<<<<< HEAD
       const response = await axios.get(`${baseURL}/attractions/${attractionId}`);
       console.log(attractionId)
       setOnEditAttraction(response.data);
=======
       const response = await getAttractionByid(attractionId);
       setAttraction(response.data);
>>>>>>> 6c470ef56aa19ddad0e27d6981df3bd15c12474a
      } catch (error) {
       console.error ("Error en Fetch Data")
      } 
     }
     fetchData()}, [])

    return <AdminAttractionForm />;
}