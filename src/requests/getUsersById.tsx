import { baseURL } from "@/constant";
import axios from 'axios';

const getUserById = async (id: string | undefined, token: string | undefined) => {
    if (!id || !token) {
        throw new Error("Email or token is undefined");
    }

    try {
        const response = await axios.get(`${baseURL}/users/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },);
        return await response.data;
    } catch (error) {
        alert(error.message);
        throw new Error(error);
    }
}

export default getUserById;