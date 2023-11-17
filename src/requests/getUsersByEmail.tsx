import { baseURL } from "@/constant";
import axios from 'axios';

const getUserByEmail = async (email: string | undefined, token: string | undefined) => {

    if (!email || !token) {
        throw new Error("Email or token is undefined");

    }

    try {
        const response = await axios.get(`${baseURL}/users/${email}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },);
        return await response.data;
    } catch (error) {
        throw new Error(error);
    }
}

export default getUserByEmail;