import Link from "next/link"

export default function AtractionsAdmin(){
    return (
    <div>
    <h1>Atractions administration</h1>

    <Link href="/AdminDashboard/AtractionsAdmin/CreateAtraction">
    <div>
                    <h1>Create New Atraction</h1>
                </div>
    </Link>
    <div></div>
    <Link href="/AdminDashboard/AtractionsAdmin/UpdateAtraction">
    <div>
                    <h1>Update Atraction</h1>
                </div>
    </Link>
    </div>
    )
    

    
}