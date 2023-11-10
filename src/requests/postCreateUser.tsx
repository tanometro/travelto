import { baseURL } from "@/constant";
import axios from "axios";
import { UserPostInterface } from "../interfaces";



const createUser = async (newUser: UserPostInterface) => {
    return await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/create`, newUser);
};

export default createUser;