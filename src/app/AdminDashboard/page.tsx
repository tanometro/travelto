"use client"
import style from "./page.module.css"


export default function AdminDashboard() {

  return (
    <main className= {style.grid}>
      <div className=" justify-center w-full h-full bg-black border bg-title-color border-solid p-4 col-start-1 col-end-1 row-start-1 row-end-3 flex flex-row flex-wrap">
      <button className=" m-2 w-4/5 h-1/5 border-solid">Usuarios</button>
      <button className=" m-2 w-4/5 h-1/5 border-solid">Atracciones</button>
      <button className=" m-2 w-4/5 h-1/5 border-solid">Ciudades</button>
      <button className=" m-2 w-4/5 h-1/5 border-solid">Visitantes</button>
      </div>
      <div className=" w-full h-full  bg-black border bg-title-color border-solid col-start-2 col-end-2 col-span-1 mb-2 ml-2 justify-between items-center flex">
        <button className="m-2 h-4/5 w-1/5 border-solid">Nuevo Usuario</button>
        <button className="m-2 h-4/5 w-1/5 border-solid">Nueva Atraccion</button>
        <button className="m-2 h-4/5 w-1/5 border-solid">Nueva Ciudad</button>
        <button className="m-2 h-4/5 w-1/5 border-solid">Log Out</button>
      </div>
      <div className="w-full h-ful  bg-black border bg-title-color border-solid p-4 col-start-2 col-end-2 ml-2 mt-2">
        Lugar de renderizado
      </div>
    </main>
  );
}