import { baseURL } from "@/constant";
import axios from "axios";
import { UserInterface } from "../interfaces";


const createUser = async (newUser: UserInterface) => {
    return await axios.post(`${baseURL}/users/create`, newUser)
};

export default createUser;