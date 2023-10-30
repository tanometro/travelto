"use client"
import { baseURL } from "@/constant";
import getAllUsers from "@/src/requests/getAllUsers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from 'axios'


type UserType = {
  id: number;
  name: string[];
  DNI: string;
  email: string,
  password: string,
  image: string,
  isActive: boolean,
  roleId: number;
};

export default function AdminUsersTable() {
  const router = useRouter();
  const [users, setUsers] = useState<UserType[]>([]);
  const [tableUsers, setTableUsers] = useState<UserType[]>([]);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    axios.get(`${baseURL}/users`)
      .then((response) => {
        setUsers(response.data);
        setTableUsers(response.data);
      })
      .catch((error) => {
        window.alert(error.message)
      })    
  }),[];

  const handleChange = (e) => {
    setSearchUser(e.target.value);
    filter(e.target.value);
  };

  const filter = (searchTerm) => {
    var searchResults = tableUsers.filter((elemento) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        elemento.DNI.toString().includes(searchTerm.toLowerCase())
      ) {
        return elemento;
      }
    });
    setUsers(searchResults);
  };

  return (
    <main className="w-full h-full m-4">
      <div className="mb-2">
        <input
          className=" text-lg p-1 rounded-xl"
          value={searchUser}
          placeholder="Nombre o DNI"
          onChange={handleChange}
        />
        <button className=" ml-2 hover:border-lime-400 font-second-font font-semibold text-lg rounded-xl text-zinc-50 bg-slate-700 p-1 border-solid">Buscar</button>
      </div>
      <div className="flex justify-center col-span-2 row-span-1">
        <table className="border min-w-full rounded-lg w-full h-full bg-slate-700">
          <thead>
            <tr>
              <th className="border-b p-2 border-r-2 border">Name</th>
              <th className="border-b p-2 border-r-2 border">DNI</th>
              <th className="border-b p-2 border-r-2 border">Email</th>
              <th className="border-b p-2 border-r-2 border">Password</th>
              <th className="border-b p-2 border-r-2 border">imagen</th>
              <th className="border-b p-2 border-r-2 border">Rol</th>
              <th className="border-b p-2 border-r-2 border">Active</th>
              <th className="border-b p-2 border-r-2 border">Edit</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border-b p-2 border-r-2">
                  {user.name[0] + " " + user.name[1]}
                </td>
                <td className="border-b p-2 border-r-2">{user.DNI}</td>
                <td className="border-b p-2 border-r-2">{user.email}</td>
                <td className="border-b p-2 border-r-2">{user.password}</td>
                <td className="border-b p-2 border-r-2">
                  <a
                    href={user.email}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  </a>
                </td>
                <td className="border-b p-2 border-r-2">
                  {user.roleId == 1
                    ? "Admin"
                    : user.roleId == 2
                      ? "Support"
                      : "User"}
                </td>
                <td className="border-b p-2 border-r-2">
                  {user.isActive ? "YES" : "NO"}
                </td>
                <td className="border-b p-2 text-center">
                  <button
                    className="hover:border-lime-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 w-32 h-8"
                    onClick={() =>
                      router.push("/AdminDashboard/AdminUsers/EditUser")
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
