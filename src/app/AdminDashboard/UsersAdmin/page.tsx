import Link from "next/link"

export default function UsersAdmin(){
   return(
   <div>
   <h1>Users administration</h1>

   <Link href= "/AdminDashboard/UsersAdmin/CreateUser">New User</Link>
   <div></div>

   <Link href= "/AdminDashboard/UsersAdmin/UpdateUser">Update User</Link>
   </div>
   )
}