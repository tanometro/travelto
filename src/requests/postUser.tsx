import { baseURL } from "@/constant";
import { UserInterface } from "../interfaces";

const createUser= async (user:UserInterface) => {
    try {
       
          const response = await fetch(`${baseURL}/users/create`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              //Authorization: storedToken,
            },
            body: JSON.stringify(user),
          });
    
          if (!response.ok) {
            const errorMessage = await response.text();
    
            if (response.status === 401) {
              throw new Error("No autorizado. Por favor, vuelve a iniciar sesión.");
            } else {
              throw new Error(`Error al crear el Usuario: ${errorMessage}`);
            }
          }
          window.alert("Usuario Creado Exitosamente");
      } catch (error) { 
        if (error as Error) {
          window.alert((error as Error).message);
        } 
      }
};
export default createUser