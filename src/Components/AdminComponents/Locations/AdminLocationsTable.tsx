"use client";
import { LocationInterface } from "@/src/interfaces";
import getAllLocations from "@/src/requests/getAlllLocations";
import EditLocationForm from "./EditLocationForm";
import { locationsColumns } from "@/src/tableColumns";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import Modal from "react-modal";

export default function AdminLocationsTable() {
  const [locations, setLocations] = useState<LocationInterface[]>([]);
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [locationModal, setLocationModal] = useState(false);
  const [seletedLocationData, setSelectedLocationData] = useState({
    id: 0,
    city: "",
    country: "",
  });

  const aCLocationModal = (id, city, country) => {
    setSelectedLocationData({
      id,
      city,
      country,
    });
    setLocationModal(!locationModal);
  };

  const table = useReactTable({
    data: locations,
    columns: locationsColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllLocations();
        setLocations(response.data);
      } catch (error) {
        console.error("Error en Fetch Data");
      }
    }
    fetchData();
  }, []);

  return (
    <div className=" w-full h-full ">
      <Modal
        isOpen={locationModal}
        onRequestClose={aCLocationModal}
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
        className="bg-white p-4 rounded-lg shadow-lg justify-items-center text-center"
      >
        <div className="mb-2 font-bold text-black text-xl boder border-b-2 border-lime-600">Edita una Ciudad</div>
      <EditLocationForm {...seletedLocationData}/>
      <button
          onClick={aCLocationModal}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
        >
          Cerrar
        </button>
      </Modal>
      <div className="rounded-lg w-full h-1/6 bg-slate-700 mb-2 justify-between">
        <span className="m-2 text-2xl text-white">Total de Ciudades: </span>
        <span className="m-2 mr-4 text-2xl text-lime-600">
          {locations.length}
        </span>
        <div>
          <span className="m-2 text-lg text-white">
            Filtrar por cualquier Propiedad
          </span>
          <input
            className="rounded-lg text-black"
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
          />
        </div>
      </div>
      <div className="h-4/6">
        <table className="min-w-full rounded-lg w-full h-full bg-slate-700">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="border-slate-300 bg-black text-2xl text-white border-solid border"
              >
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="border-slate-300 border-solid border"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}

                        {header.column.getIsSorted()
                          ? { asc: "⬆️", desc: "⬇️" }[
                              header.column.getIsSorted() as "asc" | "desc"
                            ]
                          : null}
                      </div>
                    )}
                  </th>
                ))}
                <th className="border-slate-300 border-solid border">Editar</th>
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, index) => (
              <tr
                key={row.id}
                className={index % 2 === 0 ? "bg-slate-700" : "bg-slate-500"}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border-slate-300 border-solid border text-xl text-white"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                <td className="border-slate-300 border-solid border text-xl text-white">
                <button 
                className="text-xl text-white self-center"
                onClick={() => aCLocationModal (Number(row.id)+1, row.original.city, row.original.country)}
                >✏️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="h-1/6 w-full flex justify-evenly bg-black mt-2 rounded-lg">
        <button className="text-2xl" onClick={() => table.setPageIndex(0)}>
          Primera
        </button>
        <button className="text-4xl" onClick={() => table.previousPage()}>
          ⬅️
        </button>
        <span className="text-2xl">
          {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
        </span>
        <button
          className="text-4xl"
          onClick={() => {
            if (
              table.getPageCount() > 1 &&
              table.getState().pagination.pageIndex < table.getPageCount() - 1
            ) {
              table.nextPage();
            }
          }}
          disabled={
            table.getPageCount() <= 1 ||
            table.getState().pagination.pageIndex >= table.getPageCount() - 1
          }
        >
          ➡️
        </button>
        <button
          className="text-2xl"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          Ultima
        </button>
      </div>
    </div>
  );
}
