import { baseURL } from "@/constant";
import axios from "axios";
import { UserPostInterface } from "../UserPostInterface";



const createUser = async (newUser: UserPostInterface) => {
    return await axios.post(`${baseURL}/users/create`, newUser);
};

export default createUser;