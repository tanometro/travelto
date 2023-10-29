import { baseURL } from "@/constant";
import { AttractionInterface } from "../interfaces";

const createAttraction= async (attraction: AttractionInterface) => {
    try {
       
          const response = await fetch(`${baseURL}/attractions/create`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              //Authorization: storedToken,
            },
            body: JSON.stringify(attraction),
          });
    
          if (!response.ok) {
            const errorMessage = await response.text();
    
            if (response.status === 401) {
              throw new Error("No autorizado. Por favor, vuelve a iniciar sesión.");
            } else {
              throw new Error(`Error al crear el usuario: ${errorMessage}`);
            }
          }
          window.alert("Usuario creado exitosamente");
      } catch (error) { 
        if (error as Error) {
          window.alert((error as Error).message);
        } 
      }
};

export default createAttraction;