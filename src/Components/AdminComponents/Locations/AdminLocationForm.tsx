"use client";
import React, { useState } from "react";
import { LocationFormInterface } from "@/src/interfaces";
import createLocation from "@/src/requests/postLocation";

export default function AdminLocationForm() {

  const [formData, setFormData] = useState<LocationFormInterface>({
    country: "",
    city: "",
  });

  const handleInputChange = (e: React.FormEvent) => {
    const { name, value} = e.target as HTMLInputElement;
      setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const location = {
      country: formData.country,
      city: formData.city,
    };
    await createLocation(location)
      .then(() => {
        setFormData({
          country: "",
          city: "",
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
          <div className=" flex flex-row w-full justify-evenly">
            <div className=" w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label>Ciudad:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label>Pais:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <button
              className=" hover:border-lime-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 m-2 w-1/6 p-4 border-solid"
              type="submit"
            >
              Crear Ciudad
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
