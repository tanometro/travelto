import { baseURL } from "@/constant";


const userLogin = async (Credential) => {
    const response = await fetch(`${baseURL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            //Authorization: storedToken,
        },
        body: JSON.stringify(Credential),
    });
    console.log(response);

    return await response.json();
};

export default userLogin;