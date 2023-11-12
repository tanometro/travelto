import { baseURL } from "@/constant";
import jwt from "jsonwebtoken";
const secretKey = 'Dracarys'

import axios from "axios";

const userLogin = async (credentials) => {
    const { email, password, googlePass } = credentials;

    // Realizar la solicitud POST de autenticación
    try {
        // Generar el token con jsonwebtoken
        const token = jwt.sign(
            {
                email,
                password,
                googlePass,
            }, secretKey, { expiresIn: '1h' })

        // Realizar la solicitud POST de autenticación
        const response = await axios.post(`${baseURL}/login`, credentials, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // Devolver la respuesta de la autenticación
        return response.data;
    } catch (error) {
        // Manejar errores de solicitud
        throw new Error(error);
    }
}

export default userLogin;
