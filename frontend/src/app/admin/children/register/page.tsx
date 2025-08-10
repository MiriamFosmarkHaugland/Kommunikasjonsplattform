"use client";
import Link from "next/link";
import Image from "next/image";
import Form from "../../components/form";
import Field from "../../components/field";
import { useState } from "react";
import uploadImage from "../../../../services/ImageUpload";



export default function CreateChildrenPage() {

    const [image, setImage] = useState<File>();

    async function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files != null) {
            setImage(e.target.files[0])
        }
    }
    
    async function handleSubmit(formData: FormData) {

        let fileName = "";

        if(image) {
            try {
                const response = await uploadImage(image);
                fileName = response.data.fileName;
                console.log("Image uploaded successfully:", response.data.fileName);
            } catch (error) {
                console.error("Error uploading image:", error);
            }
        }

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
            }),
        });
        if (!response.ok) {
            const errorText = await response.text();
            console.error("Failed to add child", response.status, errorText);
            return;
        } else {
            console.log("Child added successfully");
        }
        
    }
    return (
        <>
            <Form handleSubmit={handleSubmit} title="Register new Child">
                <Field title={"Enter name: "} type={'text'} name={'firstName'} required></Field>
                <Field title={"Enter last name:"} type={'text'} name={'lastName'} required></Field>
                <Field title={"Enter birth date: "} type={'date'} name={'dateOfBirth'} required></Field>

                <Field onChange={handleImage} title={"Add profile picture:"} type={'file'} name={'image'}></Field>


            </Form>
        </>
    );
}