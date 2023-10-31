
import { baseURL } from "@/constant";
import { useRouter } from "next/navigation";
import axios from "axios";

export default async function AdminLocationsTable() {

    const locations = await axios.get(`${baseURL}/locations/`)
    .then (response => {
      console.log(response)
      return response.data
    })
    const router = useRouter()

    return (
      <main className="h-full w-full m-4 justify-center">
      <div className="mb-4 justify-center">
      <input placeholder=" Search" />
        <button>Search</button>
      </div>
      <div>
        <table className="min-w-full rounded-lg w-full h-full bg-slate-700">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b p-2 border-r-2">City</th>
              <th className="border-b p-2 border-r-2">Country</th>
              <th className="border-b p-2 border-r-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.id}>
                <td className="border-b p-2 border-r-2">{location.city}</td>
                <td className="border-b p-2 border-r-2">{location.country}</td>
                <td className="border-b p-2 border-r-2 text-center">
                  <button
                    className=" border-red-600 border-solid border-2 bg-green-200 w-32 h-8 rounded"
                    onClick={() =>
                      router.push("/AdminDashboard/AdminLocations/EditLocation")
                    }
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </main>
    );

}