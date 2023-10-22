import { useRouter } from "next/navigation";

export default function AdminAttractionsCard(){
    
    const router = useRouter();

    return (
      <div className="text-black hover:scale-125 bg-attractionsCard bg-cover h-96 w-60 justify-center text-center rounded-xl">
        <button
          onClick={() => router.push("/AdminDashboard/AdminAttractions")}
          className="h-full w-full relative"
        >
          <div className=" text-4xl text-black font-black absolute top-2 left-4">
            <h1>Manage</h1>
            <h1>Attractions</h1>
          </div>
        </button>
      </div>
    );
}