"use client";
import AdminAttractionsTable from "@/src/Components/AdminComponents/Attractions/AdminAttractionsTable";
import { useRouter } from "next/navigation";


export default function AdminAttractions (){
    
    const router = useRouter()

    return (
      <main>
        <AdminAttractionsTable />
      </main>
    );
}