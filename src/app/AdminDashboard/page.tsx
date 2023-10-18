import Link from "next/link";
import AdminUsersCard from "@/Components/AdminUsersCard";
import AdminAttractionsCard from "@/Components/AdminAttractionsCard";
import AdminLocationsCard from "@/Components/AdminLocationsCard";
import './admin.css'

export default function AdminDashboard (){
return (<main>
    <Link href="/AdminDashboard/AdminUsers">
    <AdminUsersCard/>
    </Link>
    <Link href="/AdminDashboard/AdminAtractions">
    <AdminAttractionsCard/>
    </Link>
    <Link href="/AdminDashboard/AdminLocations">
    <AdminLocationsCard/>
    </Link>
</main>
)
}