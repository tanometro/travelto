import { baseURL } from "@/constant";
import axios from 'axios';

const getAllAttractions = async () => {
    try {
        const response = await axios.get(`${baseURL}/attractions`);
        console.log(response.data)
        return response
    } 
    catch (error) {
        throw new Error(error);
    }
}

export default getAllAttractions;