"use client";
import AdminAttractionForm from "@/src/Components/AdminComponents/Attractions/AdminAttractonForm";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import getAttractionByid from "@/src/requests/getAttractionById";
import { AdminAttractionFormInterface } from "@/src/interfaces";


export default function EditAttraction() {
  const params = useParams();
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

  useEffect(()=> {
    async function fetchData () {
      try {
       const response = await getAttractionByid(attractionId);
       setAttraction(response.data);
      } catch (error) {
       console.error ("Error en Fetch Data")
      } 
     }
     fetchData()}, [])

  
    return <AdminAttractionForm initialFormData={attraction}/>;
}