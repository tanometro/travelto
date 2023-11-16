import { baseURL } from "@/constant";
import axios from "axios";

const userLogin = async (credentials) => {
    const { email, password, googlePass } = credentials;
    // Realizar la solicitud POST de autenticación
    try {
        // Realizar la solicitud POST de autenticación
        const response = await axios.post(`${baseURL}/login`, credentials);
        // Devolver la respuesta de la autenticación
        return response.data;
    } catch (error) {
        // Manejar errores de solicitud
        throw new Error(error);
    }
}

export default userLogin;
