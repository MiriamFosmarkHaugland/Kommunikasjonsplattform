"use client";
import Form from "../../../../components/form";
import Field from "../../../../components/field";
import { useState } from "react";
import uploadImage from "../../../../../../lib/api/upload";
import Button from "../../../../components/button";
import TopBar from "../../../../components/topBar";
import Back from "@/app/admin/components/back";
import { addUser } from "@/lib/api/user";
import { User } from "@/lib/types/user";

export default function CreateUserPage() {
    const [image, setImage] = useState<File>();
    const [user, setUser] = useState<User>();

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
        try {
            await addUser({
                firstName: user?.firstName,
                lastName: user?.lastName,
                dateOfBirth: user?.dateOfBirth,
                address: user?.address,
                phoneNumber: user?.phoneNumber,
                email: user?.email,
                image: fileName,
            })
        } catch (error) {
            console.error("Failed to add user:", error)
        }
    }

    function handleChange(key: string, value: string) {
        setUser(prev => (
            {
                ...prev,
                [key]: value
            } as User
        ))
    }

    return (
        <>
            <TopBar leftItem={<Back />} middleItem="Registrer ny elev" rightItem=""></TopBar>
            <h1 className="text-sm p-4">PERSONLIG INFORMASJON</h1>
            <Form onSubmit={handleSubmit}>
                <table className="w-full">
                    <tbody>
                        <Field value={user?.firstName || ""} title={"Fornavn"} type={'text'} required onChange={(e) => handleChange("firstName", e.target.value)}></Field>
                        <Field value={user?.lastName || ""} title={"Etternavn"} type={'text'} required onChange={(e) => handleChange("lastName", e.target.value)}></Field>
                        <Field value={user?.dateOfBirth || ""} title={"Fødselsdato"} type={'date'} required onChange={(e) => handleChange("dateOfBirth", e.target.value)}></Field>
                        <Field value={user?.address || ""} title={"Adresse"} type={'text'} required onChange={(e) => handleChange("address", e.target.value)}></Field>
                        <Field value={user?.phoneNumber || ""} title={"Telefon"} type={'text'} required onChange={(e) => handleChange("phoneNumber", e.target.value)}></Field>
                        <Field value={user?.email || ""} title={"Email"} type={'text'} onChange={(e) => handleChange("email", e.target.value)}></Field>
                        <Field title={"Profil bilde"} type={'file'} onChange={handleImage}></Field>
                    </tbody>
                </table>
                <div className="px-4 pt-4">
                    <Button text="Fullfør" variant='Primary' />
                </div>
            </Form>
        </>
    );
}