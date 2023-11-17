"use client";
import React, { useState, useEffect } from "react";
import {
  AdminAttractionFormInterface,
  LocationInterface,
} from "@/src/interfaces";
import createAttraction from "@/src/requests/postAttraction";
import axios from "axios";
import { baseURL } from "@/constant";
import {
  Image,
  Transformation
} from "cloudinary-react";

export default function AdminAttractionForm() {
  const [formData, setFormData] = useState<AdminAttractionFormInterface>({
    name: "",
    location: 0,
    latitude: "",
    longitude: "",
    price: "",
    ranking: 0,
    hours: "",
    duration: "",
    image: "",
    description: "",
    isActive: false,
  });
  const [locations, setLocations] = useState<LocationInterface[]>([]);
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    axios
      .get(`${baseURL}/locations`)
      .then((response) => {
        setLocations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching locations:", error);
      });
  }, []);

  const uploadImage = async (imageFile: File) => {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "travelToAdmin");
  
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/ddhtxn2am/image/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setFormData((formData) => ({
        ...formData,
        image: response.data.secure_url,
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleInputChange = (e: React.FormEvent) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      setFormData((formData) => ({
        ...formData,
        [name]: checked,
      }));
    } else if (type === "file" && files) {
      const imageFile = files[0];
      uploadImage(imageFile);
    } else {
      setFormData((formData) => ({ ...formData, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const attractionForm = {
      name: formData.name,
      location: formData.location,
      latitude: formData.latitude,
      longitude: formData.longitude,
      price: formData.price,
      ranking: formData.ranking,
      hours: formData.hours,
      duration: formData.duration,
      image: formData.image,
      description: formData.description,
      isActive: formData.isActive,
    };

    await createAttraction(attractionForm)
      .then(() => {
        setFormData({
          name: "",
          location: 0,
          latitude: "",
          longitude: "",
          price: "",
          ranking: 0,
          hours: "",
          duration: "",
          image: "",
          description: "",
          isActive: false,
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
              <label className="font-bold mb-2 text-center">Name:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label>Price:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full md:w-1/3 px-3 justify-center content-center">
              <label>Is Active:</label>
              <input
                className=" w-12 h-12 shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-row w-full justify-evenly">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="font-bold mb-2 text-center">Location:</label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              >
                <option value="defaultValue">Seleccione una Ciudad</option>
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {`${location.city}, ${location.country}`}
                  </option>
                ))}
                <option value="not-found" className=" font-bold">
                  Si la ciudad no esta en la lista debe crearla
                </option>
              </select>
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label className="font-bold mb-2 text-center">Ranking:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="ranking"
                value={formData.ranking}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-row w-full justify-evenly">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label>Hours:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="hours"
                value={formData.hours}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label>Duration:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-row w-full justify-evenly">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label>Latitude:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="latitude"
                value={formData.latitude}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label>Longitude:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="longitude"
                value={formData.longitude}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-row w-full justify-evenly">
            <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
              <label>Image:</label>
              <input
                type="file"
                name="image"
                onChange={handleInputChange}
                accept="image/*"
              />
              {imageURL && (
                <Image publicId={imageURL} width="100" height="100">
                  <Transformation crop="fill" />
                </Image>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
              <label>Description:</label>
              <textarea
                className="shadow appearance-none border rounded resize-none w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <button
              className=" hover:border-lime-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 m-2 p-4 border-solid"
              type="submit"
            >
              Enviar Datos
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
