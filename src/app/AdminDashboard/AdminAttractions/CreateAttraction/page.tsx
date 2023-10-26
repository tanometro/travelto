"use client";
import AdminAttractionForm from "@/src/Components/AdminComponents/Attractions/AdminAttractonForm";

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
  return <AdminAttractionForm initialFormData={initialFormData}/>;
}
