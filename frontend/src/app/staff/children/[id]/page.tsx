"use client";
import { use, useEffect, useRef, useState } from 'react';
import { Child } from '../page';
import Home from '../../components/home';
import Edit from '../../components/edit';
import Form from '../../components/form';
import Field from '../../components/field';
import uploadImage from '@/lib/api/upload';
import Button from '../../components/button';
import NotFound from '@/app/components/notFound';

// Dynamic route segment for child details
interface Props {
    params: Promise<{ id: string }>;
}

const imageEndpoint = "http://localhost:5041/images/";

export default function ChildPage({ params }: Props) {
    const [canEdit, setCanEdit] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    const [child, setChild] = useState<Child>();
    const [hasFailed, setHasFailed] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = use(params);

    async function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files != null) {
            setImage(e.target.files[0])
        }
    }

    useEffect(() => {
        fetchChildById();
    }, []);

    async function fetchChildById() {
        try {
            const response = await fetch(`http://localhost:5041/api/children/${id}`);
            if (response.status === 404) {
                setHasFailed(true)
            }
            const data = await response.json();
            setChild(data);
            setIsLoading(false);
            console.log("Child fetched successfully:", data);
        } catch (error) {
            console.error("Error fetching child:", error);
        }
    }

    async function handleSubmit(formData: FormData) {

        let fileName = child?.profile_image || "";

        if (image) {
            const image = formData.get("image") as File;
            try {
                const response = await uploadImage(image);
                fileName = response.data.fileName;
                console.log("Image uploaded successfully", response.data.fileName);
            } catch (error) {
                console.error("Error uploading image:", error);
            }
        }

        const response = await fetch(`http://localhost:5041/api/children/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({
                First_name: formData.get("firstName"),
                Last_name: formData.get("lastName"),
                Date_of_birth: formData.get("dateOfBirth"),
                Profile_image: fileName,
            })
        });
        if (!response.ok) {
            const errorText = await response.text();
            console.error("Failed to update child", response.status, errorText);
            return;
        } else {
            console.log("Child updated successfully");
            await fetchChildById();
            setCanEdit(false);
        }
    }

    async function handleEdit() {
        setCanEdit(prev => !prev);
        await fetchChildById();
    }

    function handleChange(key: string, value: string) {
        setChild(current => ({
            ...current,
            [key]: value
        } as Child))
    }

    async function handleDelete(formData: FormData) {
        let fileName = child?.profile_image || "";

        if (image) {
            const image = formData.get("image") as File;
            try {
                const response = await uploadImage(image);
                fileName = response.data.fileName;
                console.log("Image uploaded successfully", response.data.fileName);
            } catch (error) {
                console.error("Error uploading image:", error);
            }
        }

        const response = await fetch(`http://localhost:5041/api/children/${id}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({
                First_Name: formData.delete("firstName"),
                Last_Name: formData.delete("lastName"),
                Date_of_birth: formData.get("dateOfBirth"),
                Profile_image: fileName,
            })
        })
        if (!response.ok) {
            const errorText = await response.text();
            console.log("Failed to delete child", response.status, errorText)
        } else {
            console.log("Child deleted successfully")
            //Route back to overview of all children
        }
    }

    if (hasFailed) {
        return <NotFound />
    } else {
        return (
            <>
                <div className='flex justify-between'>
                    <Home/>
                    <Edit onClick={handleEdit}/>
                </div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                    <div className='flex flex-col items-center'>
                        <div className='h-24 w-24 border rounded-lg overflow-hidden'>
                            {child?.profile_image ? (
                                <img src={`${imageEndpoint}${child?.profile_image}`} alt="Profile image" className="rounded-lg"/>
                            ): (
                                <div className="h-full w-full flex items-center justify-center text-gray-500">No Image</div>
                            )}
                            
                        </div>
                        <h1>{child?.first_name}</h1>
                    </div>

                    <Form>
                        <Field onChange={(e) => handleChange("first_name", e.target.value)} title={"Name: "} value={child?.first_name} type={'text'} name={'firstName'} disabled={!canEdit} hidden={false} placeholder="Name..."/>
                        <Field onChange={(e) => handleChange("last_name", e.target.value)} title={"Lastname:"} value={child?.last_name} type={'text'} name={'lastName'} disabled={!canEdit} hidden={false} placeholder="Lastname..."/>
                        <Field onChange={(e) => handleChange("date_of_birth", e.target.value)} title={"Date og birth: "} value={child?.date_of_birth} type={'date'} name={'dateOfBirth'} disabled={!canEdit} hidden={false}/>
                        <Field onChange={handleImage} title={"Add profile picture:"} type={'file'} name={'image'} disabled={!canEdit} hidden={!canEdit}/>
                        <Button handleButton={handleSubmit} text='Submit' hidden={!canEdit} variant='Primary'/>
                        <Button handleButton={handleDelete} text="Delete" hidden={!canEdit} variant='Danger'/>
                    </Form>
                    </>
                )}
                
            </>
        )
    }
}