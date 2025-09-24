export default async function getUser(formData: FormData) {
    let fileName = "";
    
    const response = await fetch("http://localhost:5041/api/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            dateOfBirth: formData.get("dateOfBirth"),
            image: fileName,
        })
    })
    if (!response.ok) {
            const errorText = await response.text();
            console.error("Failed to add user", response.status, errorText);
            return;
        } else {
            console.log("User added successfully");
        }
}