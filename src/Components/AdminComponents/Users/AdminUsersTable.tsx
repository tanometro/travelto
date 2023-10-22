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
    <main className="grid grid-cols-2 grid-rows-1/4 3/4">
      <div className="col-span-1 row-span-1 text-center h-1/4">
        <input
          value={searchUser}
          placeholder=" Search by Name or DNI"
          onChange={handleChange}
        />
        <button>Search</button>
      </div>
      <div className=" text-center h-1/4">
        <button
          className=" col-span-2 row-span-1 text-center w-56 h-10 text-lg  border-red-600 border-solid border-2 bg-green-400 m-6 rounded-lg "
          onClick={() => router.push("/AdminDashboard/AdminUsers/CreateUser")}
        >
          Create a New User
        </button>
      </div>

      <div className="flex justify-center col-span-2 row-span-1">
        <table className="rounded-3xl w-3/4 bg-white border-red-600 border-solid">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b p-2 border-r-2">Name</th>
              <th className="border-b p-2 border-r-2">DNI</th>
              <th className="border-b p-2 border-r-2">Rol</th>
              <th className="border-b p-2 border-r-2">Active</th>
              <th className="border-b p-2">Edit</th>
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
                    className=" border-red-600 border-solid border-2 bg-green-200 w-32 h-8 rounded"
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
