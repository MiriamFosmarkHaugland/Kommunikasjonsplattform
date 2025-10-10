import axios from "axios";
import { User } from "../types/user";

const API_BASE_URL = "http://localhost:5041/api/user"

export async function addUser(user: Partial<User>) {
    const response = await axios.post(API_BASE_URL, user, {
        headers: {
            "Content-Type": "application/json",
        }
    });
}


export async function updateUser(id: string, user: Partial<User>){
    const response = await axios.patch(`${API_BASE_URL}/${id}`, user, {
        headers: {
            "Content-Type": "application/json",
        }
    });
}

export async function deleteUser(id: string) {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
}
