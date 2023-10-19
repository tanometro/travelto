"use client"
import AdminUsersCard from "@/Components/AdminUsersCard";
import AdminAttractionsCard from "@/Components/AdminAttractionsCard";
import AdminLocationsCard from "@/Components/AdminLocationsCard";
import { useRouter } from "next/navigation";

export default function AdminDashboard (){
    const router = useRouter();

return (
  <div className="w-full h-full flex flex-row justify-around items-center bg-adminDashBoard bg-no-repeat bg-cover bg-center">
    <div className="text-red-800 hover:scale-150">
      <button onClick={() => router.push("/AdminDashboard/AdminUsers")}>
        <AdminUsersCard />
      </button>
    </div>
    <div className="text-blue-700 hover:scale-150">
      <button onClick={() => router.push("/AdminDashboard/AdminAttractions")}>
        <AdminAttractionsCard />
      </button>
    </div>
    <div className="justify-center hover:scale-150">
      <button onClick={() => router.push("/AdminDashboard/AdminLocations")}>
        <AdminLocationsCard />
      </button>
    </div>
  </div>
);
}