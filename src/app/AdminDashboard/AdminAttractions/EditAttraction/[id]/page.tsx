"use client";
import AdminAttractionForm from "@/src/Components/AdminComponents/Attractions/AdminAttractonForm";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "@/constant";
import { useParams } from "next/navigation";


export default function EditAttraction() {
  const params = useParams();
  const [attraction, setAttraction] = useState({
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
  /*const attractionId = Array.isArray(params.id)
  ? parseInt(params.id[0], 10)
  :parseInt(params.id, 10)*/
  const attractionId = params.id

  useEffect(()=> {
    async function fetchData () {
      try {
       const response = await axios.get(`${baseURL}/attractions/${attractionId}`);
       console.log(attractionId)
       setAttraction(response.data);
      } catch (error) {
       console.error ("Error en Fetch Data")
      } 
     }
     fetchData()}, [])

  
    return <AdminAttractionForm initialFormData={attraction}/>;
}