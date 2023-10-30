"use client";
import AdminAttractionForm from "@/src/Components/AdminComponents/Attractions/AdminAttractonForm";
import { setOnEditAttraction } from "@/src/redux/features/attractionsSlice";
import { useEffect } from "react";
const initialFormData = {
  name: "",
  description: "",
  latitude: "",
  longitude: "",
  price: "",
  hours: "",
  duration: "",
  image: "",
  isActive: true,
  location: [],
};

export default function CreateAttraction() {
  useEffect(()=>{
    setOnEditAttraction(initialFormData)
  }, [])

  return <AdminAttractionForm/>;
}
