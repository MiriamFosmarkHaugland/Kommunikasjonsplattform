import axios from "axios";

const ImageUploadEndpoint = "http://localhost:5041/api/UploadImage";

export default async function uploadImage(image: File) {
    const formData = new FormData();
    formData.append("file", image);

    const response = await axios({
        url: ImageUploadEndpoint,
        method: "POST",
        data: formData,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response;
}