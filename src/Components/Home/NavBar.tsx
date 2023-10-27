"use client";
import Link from "next/link";
import FilterPanel from "../Filtrado/FilterPanel";
import { useState } from "react";

export default function NavBar() {
  const [isPanelOpen, setPanelOpen] = useState(false);

  const togglePanel = () => {
    setPanelOpen(!isPanelOpen);
    console.log(isPanelOpen)
  };

  return (
    <nav className=" h-14 flex justify-between items-center w-full mx-3">
      <a href="#" className=" ml-6 text-white font-bold">
        TravelTo
      </a>
      <div
        className="h-[var(--header-height)] flex justify-between items-center max-w-fit"
        id="nav-menu"
      >
        <ul className="text-center flex flex-row gap-10">
          <li>
            <a
              href="#home"
              className="nav__link relative text-title-color text-second-font font-medium hover:text-title-color-hover hover:after-width-70 active:after-width-70"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="nav__link relative text-title-color text-second-font font-medium hover:text-title-color-hover hover:after-width-70 active:after-width-70"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#popular"
              className="nav__link relative text-title-color text-second-font font-medium hover:text-title-color-hover hover:after-width-70 active:after-width-70"
            >
              Popular
            </a>
          </li>
          <li>
            <a
              href="#explore"
              className="nav__link relative text-title-color text-second-font font-medium hover:text-title-color-hover hover:after-width-70 active:after-width-70"
            />

            <Link
              href="#explore"
              className="nav__link relative text-title-color text-second-font font-medium hover:text-title-color-hover hover:after-width-70 active:after-width-70"
            >
              Explore
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="nav__link relative text-title-color text-second-font font-medium hover:text-title-color-hover hover:after-width-70 active:after-width-70"
            >
              Login
            </Link>
          </li>
        </ul>
        {/*Close button*/}
        {/*Toggle button*/}
      </div>
      <div className="flex mb-4">
        <button
          onClick={togglePanel}
          className="mr-4 py-2 px-6 nav__link relative 
           text-title-color text-second-font font-bold hover:text-title-color-hover hover:after-width-70 active:after-width-70"
        >
          Filtrar y Ordenar
        </button>

        <FilterPanel isOpen={isPanelOpen}/>
      </div>

      <div
        className="flex text-title-color text-1.25rem cursor-pointer"
        id="nav-toggle"
      >
        <i className="ri-menu-fill" />
      </div>
      <div
        className="flex text-title-color text-1.25rem cursor-pointer"
        id="nav-close"
      >
        <i className="ri-close-line" />
      </div>
    </nav>
  );
}
