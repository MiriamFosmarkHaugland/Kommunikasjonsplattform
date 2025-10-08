import { User } from "../types/user";

export async function addUser(user: Partial<User>){
    const response = await fetch("http://localhost:5041/api/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    if (!response.ok) {
        const errorText = await response.text();
        console.error("Failed to add user", response.status, errorText);
    } else {
        console.log("user added successfully");
    }
}

export async function updateUser(id: string, user: Partial<User>){
    const response = await fetch(`http://localhost:5041/api/user/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    if (!response.ok) {
        const errorText = await response.text();
        console.error("Failed to update user", response.status, errorText)
    } else {
        console.log("User updated successfully")
    }
}

export async function deleteUser(id: string) {
    const response = await fetch(`http://localhost:5041/api/user/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) {
        const errorText = await response.text();
        console.log("Failed to delete user", response.status, errorText)
    } else {
        console.log("User deleted successfully")
    }
}
