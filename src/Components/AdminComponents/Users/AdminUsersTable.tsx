import data from "../../../../public/Users.json";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type UserType = {
  id: number;
  name: string[];
  DNI: number;
  isActive: boolean;
  roleId: number;
};

export default function AdminUsersTable() {
  const router = useRouter();
  const [users, setUsers] = useState<UserType[]>([]);
  const [tableUsers, setTableUsers] = useState<UserType[]>([]);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    setUsers(data.users), setTableUsers(data.users);
  }),
    [];

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
    <main className="w-full h-full m-4 justify-center flex flex-row">
      <div className="pb-4">
        <input
          value={searchUser}
          placeholder=" Search by Name or DNI"
          onChange={handleChange}
        />
        <button>Search</button>
      </div>
      <div className="flex justify-center col-span-2 row-span-1">
        <table className="border min-w-full rounded-lg w-full h-full bg-slate-700">
          <thead>
            <tr>
              <th className="border-b p-2 border-r-2 border">Name</th>
              <th className="border-b p-2 border-r-2 border">DNI</th>
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
