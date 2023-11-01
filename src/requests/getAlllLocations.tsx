import { baseURL } from "@/constant";
import axios from 'axios';

const getAllLocations = async () => {
    try {
        const response = await axios.get(`${baseURL}/locations`);
        console.log(response.data)
        return response
    } 
    catch (error) {
        throw new Error(error);
    }
}

export default getAllLocations;