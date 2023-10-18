import Link from "next/link"

export default function AdminDashboard(){
  return (
    <div>
      <h1>Admin Page</h1>
      <Link href="/AdminDashboard/UsersAdmin">
        <div>
          <h1>Users Administration</h1>
        </div>
      </Link>
      <Link href="/AdminDashboard/LocationsAdmin">
        <div>
          <h1>Locations Administration</h1>
        </div>
      </Link>
      <Link href="/AdminDashboard/AtractionsAdmin">
        <div>
          <h1>Atractions Administration</h1>
        </div>
      </Link>
    </div>
  );
}