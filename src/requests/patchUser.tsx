import { baseURL } from "@/constant";
import { UserEditInterface } from "../interfaces";

const patchUser= async (user:UserEditInterface) => {
    try {
       
          const response = await fetch(`${baseURL}/users/update/${user.id}`,
          {
            method: 'PATCH',
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
              throw new Error(`Error al editar el Usuario: ${errorMessage}`);
            }
          }
          window.alert("Usuario Editado Exitosamente");
      } catch (error) { 
        if (error as Error) {
          window.alert((error as Error).message);
        } 
      }
};
export default patchUser