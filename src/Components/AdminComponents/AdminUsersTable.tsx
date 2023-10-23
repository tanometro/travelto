import data from "../../../public/Users.json";
import { useRouter } from "next/navigation";

export default function AdminUsersTable(){

    const users = data.users;
    const router = useRouter();

    return(
        <div>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b p-2 border-r-2">Name</th>
              <th className="border-b p-2 border-r-2">DNI</th>
              <th className="border-b p-2 border-r-2">Rol</th>
              <th className="border-b p-2 border-r-2">Active</th>
              <th className="border-b p-2 border-r-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="border-b p-2 border-r-2">{user.name}</td>
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
                <td className="border-b p-2 border-r-2 text-center">
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
    )
}