"use client";
import { use, useEffect, useState } from 'react';
import { User } from '../page';
import Edit from '../../../components/edit';
import Form from '../../../components/form';
import Field from '../../../components/field';
import uploadImage from '@/lib/api/upload';
import Button from '../../../components/button';
import NotFound from '@/app/components/notFound';
import TopBar from '../../../components/topBar';
import Back from '../../../components/back';
import ShortDetails from '../../../components/shortDetails';
import Link from 'next/link';

// Dynamic route segment for user details
interface Props {
    params: Promise<{ id: string }>;
}

export default function UserPage({ params }: Props) {
    const [canEdit, setCanEdit] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    const [user, setUser] = useState<User>();
    const [initialUserValue, setInitialUserValue] = useState<User>();
    const [hasFailed, setHasFailed] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = use(params);

    async function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files != null) {
            setImage(e.target.files[0])
        }
    }

    useEffect(() => {
        fetchUserById();
    }, []);

    async function fetchUserById() {
        try {
            const response = await fetch(`http://localhost:5041/api/user/${id}`);
            if (response.status === 404) {
                setHasFailed(true)
            }
            const data = await response.json();
            setUser(data);
            setInitialUserValue(data);
            setIsLoading(false);
            console.log("User fetched successfully:", data);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    }

    async function handleSubmit() {

        let fileName = user?.image || "";

        if (image) {
            try {
                const response = await uploadImage(image);
                fileName = response.data.fileName;
                console.log("Image uploaded successfully", response.data.fileName);
            } catch (error) {
                console.error("Error uploading image:", error);
            }
        }

        const response = await fetch(`http://localhost:5041/api/user/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({
                firstName: user?.firstName,
                lastName: user?.lastName,
                dateOfBirth: user?.dateOfBirth,
                Profile_image: fileName,
            })
        });
        if (!response.ok) {
            const errorText = await response.text();
            console.error("Failed to update user", response.status, errorText);
            return;
        } else {
            console.log("User updated successfully");
            await fetchUserById();
            setCanEdit(false);
        }
    }

    async function handleEdit() {
        setCanEdit(prev => !prev);
        await fetchUserById();
    }

    function handleChange(key: string, value: string) {
        setUser(current => ({
            ...current,
            [key]: value
        } as User))
    }

    async function handleDelete() {
        let fileName = user?.image || "";

        if (image) {
            try {
                const response = await uploadImage(image);
                fileName = response.data.fileName;
                console.log("Image uploaded successfully", response.data.fileName);
            } catch (error) {
                console.error("Error uploading image:", error);
            }
        }

        const response = await fetch(`http://localhost:5041/api/user/${id}`, {method: "DELETE"})
        if (!response.ok) {
            const errorText = await response.text();
            console.log("Failed to delete User", response.status, errorText)
        } else {
            console.log("User deleted successfully")
        }
    }

    async function handleCancel() {
        setUser(initialUserValue);
        setCanEdit(false);
    }

    if (hasFailed) {
        return <NotFound />
    } else {
        return (
            <>
                {isLoading ? (
                    <div className='flex flex-col items-center justify-center h-screen bg-white'>
                    <p>Loading...</p>
                    </div>
                ) : (
                    <>
                        <TopBar 
                            leftItem={<Back/>} 
                            middleItem={"Informasjon"}
                            rightItem={<Edit onClick={handleEdit}/>}>
                        </TopBar>

                        {user?.image ? (
                            <ShortDetails name={user.firstName} lastName={user.lastName} image={user.image}/>
                        ): (
                            <div className="h-full w-full flex items-center justify-center text-gray-500">No Image</div>
                        )}

                        <h1 className="text-sm p-4">PERSONLIG INFORMASJON</h1>
                        
                        <Form onSubmit={handleSubmit}>
                            <table>
                                <Field onChange={(e) => handleChange("firstName", e.target.value)} title={"Navn"} value={user?.firstName} type={'text'} disabled={!canEdit} />
                                <Field onChange={(e) => handleChange("lastName", e.target.value)} title={"Etternavn"} value={user?.lastName} type={'text'} disabled={!canEdit} />
                                <Field onChange={(e) => handleChange("dateOfBirth", e.target.value)} title={"Fødselsdato"} value={user?.dateOfBirth} type={'date'} disabled={!canEdit}/>
                                <Field onChange={(e) => handleChange("address", e.target.value)} title={"Adresse"} value={user?.address} type={'text'} disabled={!canEdit} />
                                <Field onChange={(e) => handleChange("phoneNumber", e.target.value)} title={"Telefon"} value={user?.phoneNumber} type={'text'} disabled={!canEdit} />
                                <Field onChange={(e) => handleChange("email", e.target.value)} title={"Email"} value={user?.email} type={'text'} disabled={!canEdit} />
                                <Field onChange={handleImage} title={"Profil bilde"} type={'file'} disabled={!canEdit} hidden={!canEdit}/>
                            </table>
                            <Button text='Fullfør' hidden={!canEdit} variant='Primary'/>
                            <Button handleButton={handleCancel} text="Avbryt" hidden={!canEdit} variant="Neutral"/>
                            <Button handleButton={handleDelete} text="Slett" hidden={!canEdit} variant='Danger'/>
                        </Form>
                        
                    </>
                )}
                
            </>
        )
    }
}