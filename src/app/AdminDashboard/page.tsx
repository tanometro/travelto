"use client"
import AdminUsersCard from "@/Components/AdminComponents/Users/AdminUsersCard";
import AdminAttractionsCard from "@/Components/AdminComponents/Attractions/AdminAttractionsCard";
import AdminLocationsCard from "@/Components/AdminComponents/Locations/AdminLocationsCard";

export default function AdminDashboard (){

return (
  <div className="w-full h-full flex flex-row justify-around items-center bg-opacity-90 bg-black">
    <AdminUsersCard />
    <AdminAttractionsCard />
    <AdminLocationsCard />
  </div>
);
}