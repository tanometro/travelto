"use client"
import AdminUsersCard from "@/Components/AdminUsersCard";
import AdminAttractionsCard from "@/Components/AdminAttractionsCard";
import AdminLocationsCard from "@/Components/AdminLocationsCard";
import { useRouter } from "next/navigation";

export default function AdminDashboard (){
    const router = useRouter();

return (
  <div className="w-full h-full flex flex-row justify-around items-center bg-adminDashBoard bg-no-repeat bg-cover bg-center">
    <div className="text-red-800 hover:scale-125 bg-usersCard bg-cover h-96 w-60 justify-center text-center">
      <button onClick={() => router.push("/AdminDashboard/AdminUsers")} className="h-full w-full" >
        <AdminUsersCard />
      </button>
    </div>
    <div className="text-red-800 hover:scale-125 bg-attractionsCard bg-cover h-96 w-60 justify-center text-center" >
      <button onClick={() => router.push("/AdminDashboard/AdminAttractions")} className="h-full w-full">
        <AdminAttractionsCard />
      </button>
    </div>
    <div className="text-red-800 hover:scale-125 bg-locationsCard bg-cover h-96 w-60 justify-center" >
      <button onClick={() => router.push("/AdminDashboard/AdminLocations")} className="h-full w-full">
        <AdminLocationsCard />
      </button>
    </div>
  </div>
);
}