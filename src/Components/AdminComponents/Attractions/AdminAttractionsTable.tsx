"use client";
import { AttractionsCartInterface } from "@/src/interfaces";
import getAllAttractions from "@/src/requests/getAllAttractions";
import { attractionsColumns } from "@/src/tableColumns";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel
} from "@tanstack/react-table";
import { useEffect, useState } from "react";

export default function AdminLocationsTable() {
  const [attractions, setAttractions] = useState<AttractionsCartInterface[]>([]);
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data: attractions,
    columns: attractionsColumns,
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
        const response = await getAllAttractions();
        setAttractions(response.data);
      } catch (error) {
        console.error("Error en Fetch Data");
      }
    }
    fetchData();
  }, []);

  return (
    <div className=" w-full h-full ">
      <div className="rounded-lg w-full h-1/6 bg-slate-700 mb-2 justify-between">
        <span className="m-2 text-2xl text-white">Total de Atracciones: </span>
        <span className="m-2 mr-4 text-2xl text-lime-600">{attractions.length}</span>
        <div>
        <span className="m-2 text-lg text-white">Filtrar por cualquier Propiedad</span>
        <input 
        className="rounded-lg text-black"
        type="text"
        value= {filtering}
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

                        {
                          header.column.getIsSorted() 
                          ? { asc: "⬆️", desc: "⬇️" }[header.column.getIsSorted() as 'asc' | 'desc'] 
                          : null
                        }
                      </div>
                    )}
                  </th>
                ))}
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
          if (table.getPageCount() > 1 && table.getState().pagination.pageIndex < table.getPageCount() - 1) {
            table.nextPage();
          }
        }}
        disabled={table.getPageCount() <= 1 || table.getState().pagination.pageIndex >= table.getPageCount() - 1}
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