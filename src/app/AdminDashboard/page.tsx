"use client"
import AdminUsersCard from "@/Components/AdminComponents/AdminUsersCard";
import AdminAttractionsCard from "@/Components/AdminComponents/AdminAttractionsCard";
import AdminLocationsCard from "@/Components/AdminComponents/AdminLocationsCard";

export default function AdminDashboard (){

return (
  <div className="w-full h-full flex flex-row justify-around items-center bg-adminDashBoard bg-no-repeat bg-cover bg-center">
    <AdminUsersCard />
    <AdminAttractionsCard />
    <AdminLocationsCard />
  </div>
);
}