"use client";
import AdminUsersTable from "@/src/Components/AdminComponents/Users/AdminUsersTable";
import NewUserForm from "@/src/Components/AdminComponents/Users/NewUserForm";
import AdminAttractionsTable from "@/src/Components/AdminComponents/Attractions/AdminAttractionsTable";
import AdminAttractionForm from "@/src/Components/AdminComponents/Attractions/NewAttractonForm";
import AdminLocationsTable from "@/src/Components/AdminComponents/Locations/AdminLocationsTable";
import AdminLocationForm from "@/src/Components/AdminComponents/Locations/NewLocationForm";
import style from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import Modal from "react-modal";

if (typeof window !== "undefined") {
  Modal.setAppElement("body");
}

export default function AdminDashboard() {
  const [mostrar, setMostrar] = useState(
    <>
      Elija una Opcion en lista Desplegable para visualizar y administrar o cree
      una nueva Entrada utilizando los botones superiores
    </>
  );
  const [locationModal, setLocationModal] = useState(false);
  const [attractionModal, setAttractionModal] = useState(false);
  const [userModal, setUserModal] = useState(false)
  const [selectedOption, setSelectedOption] = useState("");

  const aCLocationModal = () => {
    setLocationModal(!locationModal);
  };
  const aCAttractionModal = () => {
    setAttractionModal(!attractionModal);
  };
  const aCUserModal = () => {
    setUserModal(!userModal);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);

    switch (event.target.value) {
      case "users":
        userClick();
        break;
      case "attractions":
        attractionsClick();
        break;
      case "locations":
        locationsClick();
        break;
      default:
        break;
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

  return (
    <main className={style.grid}>
      <Modal
        isOpen={locationModal}
        onRequestClose={aCLocationModal}
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
        className="bg-white p-4 rounded-lg shadow-lg justify-items-center text-center"
      >
        <div className="mb-2 font-bold text-black text-xl boder border-b-2 border-lime-600">Crea o Edita la Ciudad</div>
        <AdminLocationForm/>
        <button
          onClick={aCLocationModal}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
        >
          Cerrar
        </button>
      </Modal>
      <Modal
        isOpen={attractionModal}
        onRequestClose={aCAttractionModal}
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
        className="bg-white p-4 rounded-lg shadow-lg justify-items-center text-center"
      >
        <div className="mb-2 font-bold text-black text-xl boder border-b-2 border-lime-600">Crea la Atracción</div>
        <AdminAttractionForm/>
        <button
          onClick={aCAttractionModal}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
        >
          Cerrar
        </button>
      </Modal>
      <Modal
        isOpen={userModal}
        onRequestClose={aCUserModal}
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
        className="bg-white p-4 rounded-lg shadow-lg justify-items-center text-center"
      >
        <div className="mb-2 font-bold text-black text-xl boder border-b-2 border-lime-600">Crea un Usuario</div>
        <NewUserForm/>
        <button
          onClick={aCUserModal}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
        >
          Cerrar
        </button>
      </Modal>
      <div className=" rounded-lg w-full h-full bg-black border bg-title-color border-solid col-start-1 col-end-3 col-span-2 mb-2 ml-2 justify-evenly items-center flex">
        <select
          onChange={handleSelectChange}
          className="hover:border-lime-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 m-2 w-1/6 h-4/5 border-white border-solid text-center"
        >
          <option value="defaultValue">Elija que Administrar</option>
          <option value="users">Lista de Usuarios</option>
          <option value="attractions">Lista de Attracciones</option>
          <option value="locations">Lista de Ciudades</option>
        </select>
        <button
          onClick={aCUserModal}
          className=" hover:border-lime-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 m-2 h-4/5 w-1/6 border-solid"
        >
          Nuevo Usuario
        </button>
        <button
          onClick={aCAttractionModal}
          className=" hover:border-lime-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 m-2 h-4/5 w-1/6 border-solid"
        >
          Nueva Atraccion
        </button>
        <button
          onClick={aCLocationModal}
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
