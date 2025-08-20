export default async function getChildren(formData: FormData) {
    let fileName = "";
    
    const response = await fetch("http://localhost:5041/api/children", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            First_name: formData.get("firstName"),
            Last_name: formData.get("lastName"),
            Date_of_birth: formData.get("dateOfBirth"),
            Profile_image: fileName,
        })
    })
    if (!response.ok) {
            const errorText = await response.text();
            console.error("Failed to add child", response.status, errorText);
            return;
        } else {
            console.log("Child added successfully");
        }
}