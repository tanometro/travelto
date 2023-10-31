import { baseURL } from "@/constant";
import { LocationInterface } from "../interfaces";

const createLocation= async (location:LocationInterface) => {
    try {
       
          const response = await fetch(`${baseURL}/locations/create`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              //Authorization: storedToken,
            },
            body: JSON.stringify(location),
          });
    
          if (!response.ok) {
            const errorMessage = await response.text();
    
            if (response.status === 401) {
              throw new Error("No autorizado. Por favor, vuelve a iniciar sesión.");
            } else {
              throw new Error(`Error al crear la Ciudad: ${errorMessage}`);
            }
          }
          window.alert("Ciudad Creada Exitosamente");
      } catch (error) { 
        if (error as Error) {
          window.alert((error as Error).message);
        } 
      }
};
export default createLocation