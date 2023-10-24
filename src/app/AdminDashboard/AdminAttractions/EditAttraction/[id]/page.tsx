"use client";
import AdminAttractionForm from "@/src/Components/AdminComponents/Attractions/AdminAttractonForm";
import axios from "axios";
import { useEffect } from "react";


export default function EditAttraction({params}) {

  const {id} = params

  useEffect((id)=> {
    const data = axios.get(`http://localhost:3001/attractions/${id}`)
    .then(() => {
      const attraction = {
        name: data.name,
        description: data.description,
        latitude: data.latitude,
        longitude: data.longitude,
        price: data.price,
        hours: data.hours,
        duration: data.duration,
        image: data.image,
        isActive: data.isActive,
      }}
    )
  }
  
    return <AdminAttractionForm initialFormData={FormData} />;
}