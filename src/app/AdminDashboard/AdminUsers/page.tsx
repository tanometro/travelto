"use client";
import AdminUsersTable from "@/Components/AdminComponents/AdminUsersTable";
import { useRouter } from "next/navigation";

export default function AdminUsers() {

  const router = useRouter();

  return (
    <main>
      <AdminUsersTable />
      <div className=" text-center">
        <button
          className="w-60 h-20 text-2xl  border-red-600 border-solid border-2 bg-green-200 m-6 rounded-lg "
          onClick={() => router.push("/AdminDashboard/AdminUsers/CreateUser")}
        >
          Create a New User
        </button>
      </div>
    </main>
  );
}
