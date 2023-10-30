import { useRouter } from "next/navigation";
import Image from "next/image";
import adminAttrac from '../../../../public/images/AdminAttractions.jpg'

export default function AdminAttractionsCard() {
  const router = useRouter();

  return (
    <div className="text-black hover:scale-125 h-96 w-60 justify-center mt-1/4 text-center rounded-xl relative">
 
      <button
        onClick={() => router.push("/AdminDashboard/AdminAttractions")}
        className="h-full w-full flex flex-col justify-center items-center text-4xl font-black left-4"
      >
        <h1>Manage</h1>
        <h1>Attractions</h1>
        <Image
        src={adminAttrac}
        alt="Imagen de Fondo no encontrada"
        layout="around"
        objectFit="cover"
        className="hover:scale-125"
      />
      </button>
    </div>
  );
}