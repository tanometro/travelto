"use client"
import { useState } from "react";

const FilterPanel = ({ isOpen }) => {
  const [subMenu, setSubMenu] = useState(null);

  if (!isOpen) return null; // Si isOpen es falso, no renderizar el panel
  const handleSubMenuClick = (menu) => {
    if (subMenu === menu) {
      setSubMenu(null); // Si el mismo submenú está abierto, ciérralo al hacer clic nuevamente
    } else {
      setSubMenu(menu); // Abre el submenú correspondiente al botón clickeado
    }
  };

  return (
    <div className="fixed top-10 inset-0 bg-black bg-opacity-50 items-center">
      <div className=" bg-black flex flex-col p-4 text-center">
       <div className="mb-2 mt-2 relative">
        <button onClick={() => handleSubMenuClick('ciudad')} className=" font-bold text-xl mt-4 mb-4">Filtrar por Ciudad</button>
        {subMenu === 'ciudad' && (
          <div className="text-left flex flex-col absolute top-0 left-full">
          <select name="ciudad" id="filterSelect"></select>
          </div>
        )}
        </div>
        <div className="mb-2">
        <button className=" font-bold text-xl mt-4 mb-4">Filtrar por Tipo</button>
        </div>
        <div className="mb-2">
        <button className=" font-bold text-xl mt-4 mb-4">Ordenar por Precio</button>
        </div>
        <div className="mb-2">
        <button className=" font-bold text-xl mt-4 mb-4">Ordenar por relevancia</button>
        </div>
      </div>
    </div>
  );
};
  
  export default FilterPanel;