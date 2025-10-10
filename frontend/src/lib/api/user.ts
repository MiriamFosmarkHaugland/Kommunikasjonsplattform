import axios from "axios";
import { User } from "../types/user";

const BASE_URL = "http://localhost:5041/api/user"

export async function addUser(user: Partial<User>) {
    try {
        const response = await axios.post(BASE_URL, user, {
            headers: {
                "Content-Type": "application/json",
            }
        });
    } catch (error) {
        throw error
    }
}

export async function updateUser(id: string, user: Partial<User>){
    try {
        const response = await axios.patch(`${BASE_URL}/${id}`, user, {
            headers: {
                "Content-Type": "application/json",
            }
        });
    } catch (error) {
        throw error
    }
}

export async function deleteUser(id: string) {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        throw error
    }
}
