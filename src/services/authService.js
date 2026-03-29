import { BASE_URL } from "../constants/api";

export const loginUser = async(data) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if(!response.ok){
        throw new Error("Login Failed");
    }

    return response.json();

}

export const signupUser = async(data) => {
    const response = await fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if(!response.ok){
        throw new Error("SignUp Failed");
    }
    return response.json();
}