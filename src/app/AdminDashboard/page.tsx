"use client"
import AdminUsersCard from "@/src/Components/AdminComponents/Users/AdminUsersCard";
import AdminAttractionsCard from "@/src/Components/AdminComponents/Attractions/AdminAttractionsCard";
import AdminLocationsCard from "@/src/Components/AdminComponents/Locations/AdminLocationsCard";

export default function AdminDashboard (){

return (
  <div className="w-full h-full flex flex-row justify-around items-center bg-opacity-90 bg-black">
    <AdminUsersCard />
    <AdminAttractionsCard />
    <AdminLocationsCard />
  </div>
);
}