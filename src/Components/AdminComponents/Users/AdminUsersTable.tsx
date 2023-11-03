"use client"
import getAllUsers from "@/src/requests/getAllUsers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserInterface } from "@/src/interfaces";


export default function AdminUsersTable() {

  const [users, setUsers] = useState<UserInterface[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllUsers();
        setUsers(response.data);
        console.log(users)
      } catch (error) {
        console.error("Error en Fetch Data")
      }
    }
    fetchData();
  }, [])

  function getUserRole(roleID) {
    if (roleID === 1) {
      return "Admin";
    } else if (roleID === 2) {
      return "Support";
    } else {
      return "User";
    }
  }

  const router = useRouter();

  return (
    <main className="w-full h-full m-4">
      {/* <div className="mb-2">
        <input
          className=" text-lg p-1 rounded-xl"
          value={searchUser}
          placeholder="Nombre o DNI"
          onChange={handleChange}
        />
        <button className=" ml-2 hover:border-lime-400 font-second-font font-semibold text-lg rounded-xl text-zinc-50 bg-slate-700 p-1 border-solid">Buscar</button>
      </div> */}
      <div className="flex justify-center col-span-2 row-span-1">
        <table className="border min-w-full rounded-lg w-full h-full bg-slate-700">
          <thead>
            <tr>
              <th className="border-b p-2 border-r-2 border">Nombre y Apellido</th>
              <th className="border-b p-2 border-r-2 border">DNI</th>
              <th className="border-b p-2 border-r-2 border">Email</th>
              <th className="border-b p-2 border-r-2 border">Password</th>
              <th className="border-b p-2 border-r-2 border">imagen</th>
              <th className="border-b p-2 border-r-2 border">Rol</th>
              <th className="border-b p-2 border-r-2 border">Activo</th>
              <th className="border-b p-2 border-r-2 border">Editar</th>
            </tr>
          </thead>
          <tbody>
            {!users && users.map((user) => (
              <tr key={user.id}>
                <td className="border-b p-2 border-r-2">
                  {user.name[0] + " " + user.name[1]}
                </td>
                <td className="border-b p-2 border-r-2">{user.dni}</td>
                <td className="border-b p-2 border-r-2">{user.email}</td>
                <td className="border-b p-2 border-r-2">
                  <input
                    type="password"
                    value={user.password}
                    disabled
                    style={{ border: 'none', background: 'none' }}
                  />
                </td>
                <td className="border-b p-2 border-r-2">{user.image}</td>
                {getUserRole(user.roleID)}
                <td className="border-b p-2 border-r-2">
                  {user.isActive ? "SI" : "NO"}
                </td>
                <td className="border-b p-2 text-center">
                  <button
                    className="border-red-600 border-solid border-2 bg-green-200 w-32 h-8 rounded"
                    onClick={() =>
                      router.push("/AdminDashboard/")
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
