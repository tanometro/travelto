
import { useRouter } from "next/navigation";

export default function AdminUsersCard(){
    
    const router = useRouter();

    return(
        <div className="text-red-800 hover:scale-125 bg-usersCard bg-cover h-96 w-60 justify-center text-center align-text-top rounded-xl">
      <button
        onClick={() => router.push("/AdminDashboard/AdminUsers")}
        className="h-full w-full relative"
      >
        <div className=" text-4xl text-red-700 font-black absolute top-2 left-12">
            <h1>Manage</h1>
            <h1>Users</h1>
        </div>
      </button>
    </div>
    )
}