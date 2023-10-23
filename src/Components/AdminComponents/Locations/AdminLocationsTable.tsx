import data from "../../../../public/Locations.json";
import { useRouter } from "next/navigation";

export default function AdminLocationsTable() {

    const locations = data.locations
    const router = useRouter()

    return (
      <div>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b p-2 border-r-2">City</th>
              <th className="border-b p-2 border-r-2">Country</th>
              <th className="border-b p-2 border-r-2">coordinates</th>
              <th className="border-b p-2 border-r-2">Attractions</th>
              <th className="border-b p-2 border-r-2">CP</th>
              <th className="border-b p-2 border-r-2">Prefix</th>
              <th className="border-b p-2 border-r-2">Image</th>
              <th className="border-b p-2 border-r-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.id}>
                <td className="border-b p-2 border-r-2">{location.city}</td>
                <td className="border-b p-2 border-r-2">{location.country}</td>
                <td className="border-b p-2 border-r-2">
                  {location.latitude.split(".")[0] + "°"} -{" "}
                  {location.longitude.split(".")[0] + "°"}
                </td>
                <td className="border-b p-2 border-r-2">
                  {location.attractions.join(", ")}
                </td>
                <td className="border-b p-2 border-r-2">{location.CP}</td>
                <td className="border-b p-2 border-r-2">{location.prefijo}</td>
                <td className="border-b p-2 border-r-2 flex justify-center items-center">
                  <a
                    href={location.image}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={location.image}
                      alt="Image Not Found"
                      style={{ maxWidth: "60px" }}
                    />
                  </a>
                </td>
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
    );

}