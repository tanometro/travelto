"use client";
import AdminUsersTable from "@/Components/AdminComponents/Users/AdminUsersTable";
import { useRouter } from "next/navigation";

export default function AdminUsers() {

  const router = useRouter();

  return (
    <AdminUsersTable />
  );
}
