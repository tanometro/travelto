"use client";
import AdminAttractionsTable from "@/src/Components/AdminComponents/Attractions/AdminAttractionsTable";
import { useRouter } from "next/navigation";


export default function AdminAttractions (){
    
    const router = useRouter()

    return (
      <main>
        <AdminAttractionsTable />
        <div className=" text-center">
          <button
            className="w-60 h-20 text-2xl  border-red-600 border-solid border-2 bg-green-200 m-6 rounded-lg "
            onClick={() =>
              router.push("/AdminDashboard/Adminattractions/CreateAttraction/")
            }
          >
            Create a Attraction
          </button>
        </div>
      </main>
    );
}