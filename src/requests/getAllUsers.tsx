import { baseURL } from "@/constant";
import axios from 'axios';

const getAllUsers = async () => {
    try {
        const response = await axios.get(`${baseURL}/users`);
        console.log(response.data)
        return response
    } 
    catch (error) {
        throw new Error(error);
    }
}

export default getAllUsers;