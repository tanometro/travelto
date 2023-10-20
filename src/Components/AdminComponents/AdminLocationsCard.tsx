import { useRouter } from "next/navigation";

export default function AdminLocationsCard(){

    const router = useRouter();
    
    return (
      <div className="text-red-800 hover:scale-125 bg-locationsCard bg-cover h-96 w-60 justify-center text-center rounded-xl">
        <button
          onClick={() => router.push("/AdminDashboard/AdminLocations")}
          className="h-full w-full relative"
        >
          <div className=" text-4xl text-red-700 font-black absolute top-2 left-8">
            <h1>Manage</h1>
            <h1>Locations</h1>
          </div>
        </button>
      </div>
    );
}