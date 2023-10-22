"use client";
import AdminAttractionForm from "@/Components/AdminComponents/Attractions/AdminAttractonForm";

const initialFormData = {
  name: "",
  isActive: true,
  location: "",
  hours: "",
  duration: "",
  latitude: "",
  longitude: "",
  price: "",
  description: "",
};

export default function CreateAttraction() {
  return <AdminAttractionForm />;
}
