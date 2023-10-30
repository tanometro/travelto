"use client";
import React, { useState } from "react";
<<<<<<< HEAD
import axios from "axios";
import { baseURL } from "@/constant";
import { getOnEditAttraction } from "@/src/redux/features/attractionsSlice";
=======
import {AdminAttractionFormInterface} from '@/src/interfaces';
import createAttraction from "@/src/requests/postAttraction";
>>>>>>> 6c470ef56aa19ddad0e27d6981df3bd15c12474a

export default function AdminAttractionForm(props) {
const {initialFormData} = props;
  const [formData, setFormData] = useState<AdminAttractionFormInterface>(
    {
      name:"",
      description: "",
      latitude: "",
      longitude: "",
      price: "",
      hours: "",
      duration: "",
      imageUrl: "",
<<<<<<< HEAD
      isActive: false,
=======
      isActive: "",
>>>>>>> 6c470ef56aa19ddad0e27d6981df3bd15c12474a
      location: [],
    }
  );
  setFormData(getOnEditAttraction)
  
  const handleInputChange = (e : React.FormEvent) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      setFormData(formData => ({
        ...formData, [name]: checked
      }));
    } else {
      setFormData(formData => ({ ...formData, [name]: value }));
    }
  }

  const handleSubmit = async (e : React.FormEvent) => {
    e.preventDefault();
      const attraction = {
      name: formData.name,
      description: formData.description,
      latitude: formData.latitude,
      longitude: formData.longitude,
      price: formData.price,
      hours: formData.hours,
      duration: formData.duration,
      imageUrl: formData.imageUrl,
      isActive: formData.isActive,
      location: [],
    };
    const response = await createAttraction(attraction)
      .then(response => {
        console.log(attraction)
        window.alert('Attraction Create success')
        setFormData({
          name: "",
          description: "",
          latitude: "",
          longitude: "",
          price: "",
          hours: "",
          duration: "",
          imageUrl: "",
          isActive: false,
          location: [],
        });
      })
      .catch((error) => window.alert(error.message))

  }

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <form
        onSubmit={handleSubmit}
        className=" bg-neutral-600 shadow-md rounded px-4 pt-3 pb-3 mb-4 mt-1 flex flex-col md:w-1/2 border-t-2"
      >
        <div className="flex flex-wrap -mx-3 mb-1">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Is Active:
            </label>
            <input
              className="mr-2 leading-tight w-9 h-7"
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mb-1">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Location:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-wrap -mx-3 mb-1">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Hours:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="hours"
              value={formData.hours}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Duration:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-1">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Latitude:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="latitude"
              value={formData.latitude}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Longitude:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="longitude"
              value={formData.longitude}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image URL:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Create Attraction
        </button>
      </form>
    </div>
  );
}
