"use client"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAttractions, setRenderAttractions } from "../redux/sliceAttractions";
//import { setLocations } from "../redux/sliceLocations";
import getAllAttractions from "../requests/getAllAttractions";

export default function FetchDataToStates () {
  const dispatch = useDispatch();

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
