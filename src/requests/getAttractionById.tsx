import { baseURL } from "@/constant";
import axios from 'axios';

const getAttractionByid = (id: number) => {
    try {
        const response = axios.get(`${baseURL}/attractions/${id}`);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

export default getAttractionByid;