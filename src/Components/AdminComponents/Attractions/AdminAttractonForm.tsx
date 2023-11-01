"use client";
import React, { useState } from "react";
import { LocationInterface } from "@/src/interfaces";
import createAttraction from "@/src/requests/postAttraction";

export default function AdminLocationForm() {
  const [formData, setFormData] = useState<LocationInterface>({
    city: "",
    country: "",
  });

  const handleInputChange = (e: React.FormEvent) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const locationForm = {
      city: formData.city,
      country: formData.country,
    };
    console.log(locationForm);
    const response = await createAttraction(locationForm)
      .then((response) => {
        console.log(locationForm);
        window.alert("Attraction Create success");
        setFormData({
          city: "",
          country: "",
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
              <label className="font-bold mb-2 text-center">City:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label>Country:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <button
              className=" hover:border-lime-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 m-2 w-1/6 p-4 border-solid"
              type="submit"
            >
              Crear Atracción
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
