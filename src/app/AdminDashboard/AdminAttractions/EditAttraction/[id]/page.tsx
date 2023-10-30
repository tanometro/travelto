"use client";
import AdminAttractionForm from "@/src/Components/AdminComponents/Attractions/AdminAttractonForm";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { baseURL } from "@/constant";
import { useParams } from "next/navigation";
import { getOnEditAttraction, setOnEditAttraction } from "@/src/redux/features/attractionsSlice";


export default function EditAttraction() {
  const params = useParams();

  const attractionId = params.id

  useEffect(()=> {
    async function fetchData () {
      try {
       const response = await axios.get(`${baseURL}/attractions/${attractionId}`);
       console.log(attractionId)
       setOnEditAttraction(response.data);
      } catch (error) {
       console.error ("Error en Fetch Data")
      } 
     }
     fetchData()}, [])

    return <AdminAttractionForm />;
}