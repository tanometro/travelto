import Link from "next/link"

export default function LocationsAdmin(){
  return (
    <div>
      <h1>Locations administration</h1>

      <Link href="/AdminDashboard/LocationsAdmin/CreateLocation">
        <div>
          <h1>Create New Location</h1>
        </div>
      </Link>
      <div></div>
      <Link href="/AdminDashboard/LocationsAdmin/UpdateLocation">
        <div>
          <h1>Update Location</h1>
        </div>
      </Link>
    </div>
  );
}