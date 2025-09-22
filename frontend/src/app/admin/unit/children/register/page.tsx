"use client";
import Form from "../../../components/form";
import Field from "../../../components/field";
import { useState } from "react";
import uploadImage from "../../../../../lib/api/upload";
import Back from "../../../components/back";
import Button from "../../../components/button";
import TopBar from "../../../components/topBar";
import { Child } from "../page";

export default function CreateChildrenPage() {
    const [image, setImage] = useState<File>();
    const [child, setChild] = useState<Child>();

    async function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files != null) {
            setImage(e.target.files[0])
        }
    }
    
    async function handleSubmit() {
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
                First_name: child?.first_name,
                Last_name: child?.last_name,
                Date_of_birth: child?.date_of_birth,
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

    function handleChange(key: string, value: string) {
        setChild(prev => (
            {
                ...prev,
                [key]: value
            } as Child
        ))
    }

    return (
        <>
            <TopBar leftItem={<Back/>} middleItem="Registrer ny elev" rightItem=""></TopBar>
            <h1 className="text-sm p-4">PERSONLIG INFORMASJON</h1>
            <Form onSubmit={handleSubmit}>
                <table>
                    <Field value={child?.first_name} title={"Navn: "} type={'text'} name={'firstName'} required hidden={false} placeholder="Kari" onChange={(e) => handleChange("first_name", e.target.value)}></Field>
                    <Field value={child?.last_name} title={"Eternavn: "} type={'text'} name={'lastName'} required hidden={false} placeholder="Nordmann" onChange={(e) => handleChange("last_name", e.target.value)}></Field>
                    <Field value={child?.date_of_birth} title={"Fødselsdato: "} type={'date'} name={'dateOfBirth'} required hidden={false} onChange={(e) => handleChange("date_of_birth", e.target.value)}></Field>
                    <Field onChange={handleImage} title={"Profil bilde: "} type={'file'} name={'image'} hidden={false}></Field>
                </table>
                <Button text="Fullfør" hidden={false} variant='Primary'/>
            </Form>
        </>
    );
}