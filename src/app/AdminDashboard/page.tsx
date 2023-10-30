"use client"
import AdminUsersCard from "@/src/Components/AdminComponents/Users/AdminUsersCard";
import AdminAttractionsCard from "@/src/Components/AdminComponents/Attractions/AdminAttractionsCard";
import AdminLocationsCard from "@/src/Components/AdminComponents/Locations/AdminLocationsCard";
import Image from "next/image";
import adminBg from '../../../public/images/AdminDashboardBg.jpg'
export default function AdminDashboard (){

return (
  <div className="w-full h-full flex flex-row justify-around items-center bg-opacity-90 bg-black">
    <Image
    src={adminBg}
        alt="Imagen de Fondo no encontrada"
        layout="fill" // Deprecated legacy prop, remove this line
        objectFit="cover" // Use objectFit prop instead of layout="fill"
        priority
        className=" opacity-50"
        />
    <AdminUsersCard />
    <AdminAttractionsCard />
    <AdminLocationsCard />
  </div>
);
}