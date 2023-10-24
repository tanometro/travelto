"use client";
import React, { useState } from "react";
import axios from "axios";

const initialFormData = {
    country: "",
    name: "",
    latitude: "",
    longitude: "",
    prefix: "",
    cp: "",
    website: "",
    attractions: [],
};


export default function AdminLocationForm() {
    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const location = {
            country: formData.country,
            name: formData.name,
            latitude: formData.latitude,
            longitude: formData.longitude,
            profix: formData.prefix,
            cp: formData.cp,
            website: formData.website,
            attractions: []
        };
        axios.post(`http://localhost:3001/attractions`, location)
            .then(response => {
                window.alert('Attraction Create success')
                setFormData({
                    country: "",
                    name: "",
                    latitude: "",
                    longitude: "",
                    prefix: "",
                    cp: "",
                    website: "",
                    attractions: [],
                });
            })
            .catch((error) => window.alert(error.message))

    }

    return (
        <div className="flex justify-center items-center h-screen">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col md:w-1/2"
            >
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
                        Country:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Prefix:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="prefix"
                            value={formData.prefix}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            CP:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="cp"
                            value={formData.cp}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
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
                        Website
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Attractions:
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="description"
                        value={formData.attractions}
                        onChange={handleInputChange}
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
