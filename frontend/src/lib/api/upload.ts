import axios from "axios";

const API_BASE_URL = "http://localhost:5041/api/UploadImage";

export default async function uploadImage(image: File) {
    const formData = new FormData();
    formData.append("file", image);

    const response = await axios({
        url: API_BASE_URL,
        method: "POST",
        data: formData,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response;
}