"use client"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
<<<<<<< HEAD:src/redux/sevices/FetchDataToStates.tsx
import axios from "axios";
import { setAttractions, setRenderAttractions } from "../features/attractionsSlice";
=======
import { setAttractions, setRenderAttractions } from "../redux/sliceAttractions";
>>>>>>> 6c470ef56aa19ddad0e27d6981df3bd15c12474a:src/Utils/FetchDataToStates.tsx
//import { setLocations } from "../redux/sliceLocations";
import getAllAttractions from "../requests/getAllAttractions";

export default function FetchDataToStates () {
  const dispatch = useDispatch();

<<<<<<< HEAD:src/redux/sevices/FetchDataToStates.tsx
  useEffect(() => {
    axios.get(`${baseURL}/attractions/data`)
    .then(response => {
        console.log("Datos cargados a la base de datos");
    })
    .catch(error => {
        throw new Error(error);
    });

=======
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getAllAttractions();
            dispatch(setAttractions(response));
            dispatch(setRenderAttractions(response));
            } catch (error) {
                throw new Error(error);
            }
        }
        fetchData
    }, [])
   
}
>>>>>>> 6c470ef56aa19ddad0e27d6981df3bd15c12474a:src/Utils/FetchDataToStates.tsx
      // Carga de Attracciones al estado de redux como copia fiel de todas las atracciones, no se modificará

      // Carga de Attracciones al estado de redux como copia modificable y para mostrar
      
/*
    useEffect(() => {
        axios.get(`${baseURL}/locations`)
        .then(response => {
          dispatch(setLocations(response.data));
        })
        .catch(error => {
          throw new Error (error)
        });
    }, [dispatch]);
    */
<<<<<<< HEAD:src/redux/sevices/FetchDataToStates.tsx
   return console.log("Data cargada correctamente")
}
=======
>>>>>>> 6c470ef56aa19ddad0e27d6981df3bd15c12474a:src/Utils/FetchDataToStates.tsx
