"use client"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAttractions, setRenderAttractions } from "../redux/sliceAttractions";
//import { setLocations } from "../redux/sliceLocations";
import { baseURL } from "@/constant";

export default function FetchDataToStates () {
  
  const dispatch = useDispatch();

  useEffect(() => {
      // Carga de Attracciones al estado de redux como copia fiel de todas las atracciones, no se modificará
      axios.get(`${baseURL}/attractions`)
          .then(response => {
              dispatch(setAttractions(response.data));
          })
          .catch(error => {
              throw new Error(error);
          });

      // Carga de Attracciones al estado de redux como copia modificable y para mostrar
      axios.get(`${baseURL}/attractions`)
          .then(response => {
              dispatch(setRenderAttractions(response.data));
          })
          .catch(error => {
              throw new Error(error);
          });
        }, [dispatch]);
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
}