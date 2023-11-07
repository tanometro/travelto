"use client";
import AdminUsersTable from "@/src/Components/AdminComponents/Users/AdminUsersTable";
import AdminUserForm from "@/src/Components/AdminComponents/Users/AdminUserForm";
import AdminAttractionsTable from "@/src/Components/AdminComponents/Attractions/AdminAttractionsTable";
import AdminAttractionForm from "@/src/Components/AdminComponents/Attractions/AdminAttractonForm";
import AdminLocationsTable from "@/src/Components/AdminComponents/Locations/AdminLocationsTable";
import AdminLocationForm from "@/src/Components/AdminComponents/Locations/AdminLocationForm";
import style from "./page.module.css";
import { useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [mostrar, setMostrar] = useState(
    <>
      Elija una Opcion en el panel lateral para visualizar y administrar o cree
      una nueva Entrada utilizando los botones superiores
    </>
  );

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);

    // Realizar acciones basadas en la opción seleccionada
    if (event.target.value === "users") {
      // Lógica para acceder a la lista de usuarios
      userClick();
    } else if (event.target.value === "attractions") {
      // Lógica para acceder a la lista de atracciones
      attractionsClick();
    } else if (event.target.value === "locations") {
      // Lógica para acceder a la lista de ciudades
      locationsClick();
    }
  };
  const userClick = () => {
    setMostrar(<AdminUsersTable />);
  };
  const attractionsClick = () => {
    setMostrar(<AdminAttractionsTable />);
  };
  const locationsClick = () => {
    setMostrar(<AdminLocationsTable />);
  };
  const newAttractionClick = () => {
    setMostrar(<AdminAttractionForm />);
  };
  const newLocationClick = () => {
    setMostrar(<AdminLocationForm />);
  };
  const newUserClick = () => {
    setMostrar(<AdminUserForm />);
  };

  return (
    <main className={style.grid}>
      <div className=" rounded-lg w-full h-full bg-black border bg-title-color border-solid col-start-1 col-end-3 col-span-2 mb-2 ml-2 justify-evenly items-center flex">
        <select
          onChange={handleSelectChange}
          className="hover:border-lime-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 m-2 w-1/6 h-4/5 border-white border-solid text-center"
        >
          <option value="users">Lista de Usuarios</option>
          <option value="attractions">Lista de Attracciones</option>
          <option value="locations">Lista de Ciudades</option>
        </select>
        <button
          onClick={newUserClick}
          className=" hover:border-lime-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 m-2 h-4/5 w-1/6 border-solid"
        >
          Nuevo Usuario
        </button>
        <button
          onClick={newAttractionClick}
          className=" hover:border-lime-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 m-2 h-4/5 w-1/6 border-solid"
        >
          Nueva Atraccion
        </button>
        <button
          onClick={newLocationClick}
          className=" hover:border-lime-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 m-2 h-4/5 w-1/6 border-solid"
        >
          Nueva Ciudad
        </button>
        <Link
          href="/"
          className=" hover:border-red-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 m-2 h-4/5 w-1/6 border-solid"
        >
          <button className=" hover:border-red-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 h-full w-full border-solid">
            Log Out
          </button>
        </Link>
      </div>
      <div className=" rounded-lg w-full h-ful  bg-black border bg-title-color border-solid p-4 col-start-1 col-end-3 ml-2 mt-2 flex flex-row justify-center text-center font-bold">
        {mostrar}
      </div>
    </main>
  );
}
