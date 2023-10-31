//import data from "../../../../public/Attractions.json";
import {baseURL} from "../../../../constant"
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import getAllAttractions from "@/src/requests/getAllAttractions";

export default function AdminAttractionsTable() {

  const [attractions, setAttractions] = useState([])
    
  useEffect(() => {
    async function fetchData () {
     try {
      const response = await getAllAttractions();
      setAttractions(response.data);
     } catch (error) {
      console.error ("Error en Fetch Data")
     } 
    }
    fetchData()}, [])

  const router = useRouter();

  return (
    <main className="h-full w-full m-4">
      <div className="mb-2">
        <input 
        className=" text-lg p-1 rounded-xl"
        placeholder="Nombre o Ciudad"
        />
        <button className=" ml-2 hover:border-lime-400 font-second-font font-semibold text-lg rounded-xl text-zinc-50 bg-slate-700 p-1 border-solid" >Buscar</button>
      </div>
      <div className="flex justify-center col-span-2 row-span-1">
        <table className="border min-w-full rounded-lg w-full h-full bg-slate-700">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b p-2 border-r-2">Name</th>
              <th className="border-b p-2 border-r-2">City</th>
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
                  {attraction.City}
                </td>
                <td className="border-b p-2 border-r-2">
                  {attraction.latitud.split(".")[0] + "°"} -{" "}
                  {attraction.longitud.split(".")[0] + "°"}
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
                        `/AdminDashboard/AdminAttractions/EditAttraction/${attraction.id}`
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
