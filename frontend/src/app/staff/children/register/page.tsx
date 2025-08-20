"use client";
import Form from "../../components/form";
import Field from "../../components/field";
import { useState } from "react";
import uploadImage from "../../../../lib/api/upload";
import Home from "../../components/home";
import Button from "../../components/button";

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
            <div className="flex justify-start">
                <Home/>
            </div>
            <Form title="Register new child">
                <Field title={"Name: "} type={'text'} name={'firstName'} required hidden={false}></Field>
                <Field title={"Lastname:"} type={'text'} name={'lastName'} required hidden={false}></Field>
                <Field title={"Date og birth: "} type={'date'} name={'dateOfBirth'} required hidden={false}></Field>
                <Field onChange={handleImage} title={"Add profile picture:"} type={'file'} name={'image'} hidden={false}></Field>
                <Button handleButton={handleSubmit} text="" hidden={false} variant='Primary'/>
            </Form>
        </>
    );
}