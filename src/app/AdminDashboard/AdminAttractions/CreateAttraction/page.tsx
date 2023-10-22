"use client"
import React, { useState } from "react";

const initialFormData = {
  name: "",
  isActive: true,
  hours: "",
  location: "",
  latitude: "",
  longitude: "",
  price: "",
  duration: "",
  description: "",
};

export default function CreateAttraction () {
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío de datos, por ejemplo, enviar el objeto formData a una API.
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} >
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
      </div>
      <div>
        <label>Is Active:</label>
        <input type="checkbox" name="isActive" checked={formData.isActive} onChange={handleInputChange}  />
      </div>
      <div>
        <label>Hours:</label>
        <input type="text" name="hours" value={formData.hours} onChange={handleInputChange} />
      </div>
      <div>
        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
      </div>
      <div>
        <label>Latitude:</label>
        <input type="text" name="latitude" value={formData.latitude} onChange={handleInputChange} />
      </div>
      <div>
        <label>Longitude:</label>
        <input type="text" name="longitude" value={formData.longitude} onChange={handleInputChange} />
      </div>
      <div>
        <label>Price:</label>
        <input type="text" name="price" value={formData.price} onChange={handleInputChange} />
      </div>
      <div>
        <label>Duration:</label>
        <input type="text" name="duration" value={formData.duration} onChange={handleInputChange} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" name="description" value={formData.description} onChange={handleInputChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};