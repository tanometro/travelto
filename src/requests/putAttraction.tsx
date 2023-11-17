import { baseURL } from "@/constant";
import { PostAttractionFormInterface } from "../interfaces";

const patchLocation= async (attraction:PostAttractionFormInterface) => {
    try {
       
          const response = await fetch(`${baseURL}/attractions/update/${attraction.id}`, 
          {
            method: 'PUT',
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
              throw new Error(`Error al editar la Atracción: ${errorMessage}`);
            }
          }
          window.alert("Atracción Editada Exitosamente");
      } catch (error) { 
        if (error as Error) {
          window.alert((error as Error).message);
        } 
      }
};
export default patchLocation