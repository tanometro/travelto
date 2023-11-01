import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import getAllLocations from "@/src/requests/getAlllLocations";
import { LocationInterface } from "@/src/interfaces";

export default function AdminLocationsTable() {
  const [locations, setLocations] = useState<LocationInterface>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllLocations();
        setLocations(response.data);
      } catch (error) {
        console.error("Error en Fetch Data");
      }
    }
    fetchData();
  }, []);
  const router = useRouter();

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
              <th className="border-b p-2 border-r-2">ID</th>
              <th className="border-b p-2 border-r-2">Ciudad</th>
              <th className="border-b p-2 border-r-2">Pais</th>
              <th className="border-b p-2 border-r-2">Editar</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.id}>
                <td className="border-b p-2 border-r-2">{location.id}</td>
                <td className="border-b p-2 border-r-2">{location.city}</td>
                <td className="border-b p-2 border-r-2">{location.country}</td>
                <td className="border-b p-2 border-r-2 text-center">
                  <button
                    className=" border-red-600 border-solid border-2 bg-green-200 w-32 h-8 rounded"
                    onClick={() =>
                      router.push("/AdminDashboard/AdminLocations/EditLocation")
                    }
                  >
                    Editar
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
