"use client";
import AdminLocationsTable from "@/src/Components/AdminComponents/Locations/AdminLocationsTable";
import { useRouter } from "next/navigation";


export default function AdminLocations (){
    
    const router = useRouter()

    return (
      <main>
        <AdminLocationsTable />
        <div className=" text-center">
          <button
            className="w-60 h-20 text-2xl  border-red-600 border-solid border-2 bg-green-200 m-6 rounded-lg "
            onClick={() =>
              router.push("/AdminDashboard/AdminLocations/CreateLocation")
            }
          >
            Create a Location
          </button>
        </div>
      </main>
    );
}