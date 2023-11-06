"use client";
import React, { useState } from "react";
import { UserFormInterface} from "@/src/interfaces";
import createUser from "@/src/requests/postUser";

export default function AdminAttractionForm() {
  const [formData, setFormData] = useState<UserFormInterface>({
    name: "",
    lastname: "",
    dni: "",
    image: "",
    email: "",
    password: "",
    isActive: false,
    roleID: 3
  });

  const handleInputChange = (e: React.FormEvent) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      setFormData((formData) => ({
        ...formData,
        [name]: checked,
      }));
    } else {
      setFormData((formData) => ({ ...formData, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = {
      name: [formData.name, formData.lastname],
      dni: formData.dni,
      image: formData.image,
      email: formData.email,
      password: formData.password,
      isActive: formData.isActive,
      roleID: formData.roleID
      }
    console.log(user)
  await createUser(user)
      .then(() => {
        setFormData({
            name: "",
            lastname: "",
            dni: "",
            image: "",
            email: "",
            password: "",
            isActive: false,
            roleID: 3
        });
      })
      .catch((error) => window.alert(error.message));
    };

    return (
        <main className="h-full w-full m-4">
          <div>
            <form
              onSubmit={handleSubmit}
              className=" bg-slate-700 shadow-md rounded-xl grid grid-cols-2"
            >
              <div className="flex flex-row m-4 justify-around">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="font-bold mb-2 text-center">Nombre:</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="w-full md:w-1/3 px-3">
                  <label>Apellido:</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full md:w-1/3 px-3">
                  <label>D.N.I.:</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="dni"
                    value={formData.dni}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 justify-center content-center">
                  <label>Activo:</label>
                  <input
                    className=" w-12 h-12 shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    type="checkbox"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-row w-full justify-evenly">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="font-bold mb-2 text-center">Email:</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="w-full md:w-1/3 px-3">
                  <label className="font-bold mb-2 text-center">Password:</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="w-full md:w-1/3 px-3">
                  <label className="font-bold mb-2 text-center">Rol:</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="roleID"
                    value={formData.roleID}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row w-full justify-evenly">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label>Imagen:</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <button
                  className=" hover:border-lime-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 m-2 w-1/6 p-4 border-solid"
                  type="submit"
                >
                  Crear Usuario
                </button>
              </div>
            </form>
          </div>
        </main>
      );
}
