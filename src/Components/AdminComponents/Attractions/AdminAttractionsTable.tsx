import data from "../../../../public/Attractions.json";
import { useRouter } from "next/navigation";

export default function AdminAttractionsTable() {
  const attractions = data.attractions;
  const router = useRouter();

  return (
    <main className="grid grid-cols-2 grid-rows-1/4 3/4">
      <div className="col-span-1 row-span-1 text-center h-1/4">
        <input placeholder=" Search" />
        <button>Search</button>
      </div>
      <div className=" text-center h-1/4">
        <button
          className=" col-span-2 row-span-1 text-center w-56 h-10 text-lg  border-red-600 border-solid border-2 bg-green-400 m-6 rounded-lg "
          onClick={() =>
            router.push("/AdminDashboard/AdminAttractions/CreateAttraction")
          }
        >
          Create a New Attraction
        </button>
      </div>
      <div className="flex justify-center col-span-2 row-span-1">
        <table className="rounded-3xl w-3/4 bg-white border-red-600 border-solid">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b p-2 border-r-2">Name</th>
              <th className="border-b p-2 border-r-2">Location</th>
              <th className="border-b p-2 border-r-2">Coordinates</th>
              <th className="border-b p-2 border-r-2">Price</th>
              <th className="border-b p-2 border-r-2">Duration</th>
              <th className="border-b p-2 border-r-2">Description</th>
              <th className="border-b p-2 border-r-2">Active</th>
              <th className="border-b p-2 border-r-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {attractions.map((attraction) => (
              <tr key={attraction.id}>
                <td className="border-b p-2 border-r-2">{attraction.name}</td>
                <td className="border-b p-2 border-r-2">
                  {attraction.location}
                </td>
                <td className="border-b p-2 border-r-2">
                  {attraction.latitude.split(".")[0] + "°"} -{" "}
                  {attraction.longitude.split(".")[0] + "°"}
                </td>
                <td className="border-b p-2 border-r-2">{attraction.price}</td>
                <td className="border-b p-2 border-r-2">
                  {attraction.duration}
                </td>
                <td className="border-b p-2 border-r-2">
                  <a
                    href={attraction.description}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Description
                  </a>
                </td>
                <td className="border-b p-2 border-r-2">
                  {attraction.isActive}
                </td>
                <td className="border-b p-2 border-r-2 text-center">
                  <button
                    className=" border-red-600 border-solid border-2 bg-green-200 w-32 h-8 rounded"
                    onClick={() =>
                      router.push(
                        `/AdminDashboard/AdminAttractions/EditAttraction/`
                      )
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
