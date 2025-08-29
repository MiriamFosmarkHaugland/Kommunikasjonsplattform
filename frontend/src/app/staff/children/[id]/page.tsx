"use client";
import { use, useEffect, useRef, useState } from 'react';
import { Child } from '../page';
import Edit from '../../components/edit';
import Form from '../../components/form';
import Field from '../../components/field';
import uploadImage from '@/lib/api/upload';
import Button from '../../components/button';
import NotFound from '@/app/components/notFound';
import TopBar from '../../components/topBar';
import Back from '../../components/back';
import ShortDetails from '../../components/shortDetails';
import Link from 'next/link';

// Dynamic route segment for child details
interface Props {
    params: Promise<{ id: string }>;
}

const imageEndpoint = "http://localhost:5041/images/";

export default function ChildPage({ params }: Props) {
    const [canEdit, setCanEdit] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    const [child, setChild] = useState<Child>();
    const [initialChildValue, setInitialChildValue] = useState<Child>();
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
            setInitialChildValue(data);
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

    async function handleCancel() {
        setChild(initialChildValue);
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
                            middleItem={"Details"}
                            rightItem={<Edit onClick={handleEdit}/>}>
                        </TopBar>

                        {child?.profile_image ? (
                            <ShortDetails name={child.first_name} lastName={child.last_name} image={child.profile_image}/>
                        ): (
                            <div className="h-full w-full flex items-center justify-center text-gray-500">No Image</div>
                        )}

                        <div className="flex justify-around bg-gray-100 h-12 items-center border-t border-b border-gray-200">
                            <Link href="/staff">Details</Link>
                            <Link href="/staff">Calendar</Link>
                            <Link href="/staff">Documents</Link>
                        </div>

                        <h1 className="text-sm p-4">BASIC INFORMATION</h1>
                        
                        <Form>
                            <Field onChange={(e) => handleChange("first_name", e.target.value)} title={"Name"} value={child?.first_name} type={'text'} name={'firstName'} disabled={!canEdit} hidden={false} placeholder="Name..."/>
                            <Field onChange={(e) => handleChange("last_name", e.target.value)} title={"Lastname"} value={child?.last_name} type={'text'} name={'lastName'} disabled={!canEdit} hidden={false} placeholder="Lastname..."/>
                            <Field onChange={(e) => handleChange("date_of_birth", e.target.value)} title={"Date of birth"} value={child?.date_of_birth} type={'date'} name={'dateOfBirth'} disabled={!canEdit} hidden={false}/>
                            <Field onChange={handleImage} title={"Profile picture"} type={'file'} name={'image'} disabled={!canEdit} hidden={!canEdit}/>
                        </Form>
                        <Button handleButton={handleSubmit} text='Submit' hidden={!canEdit} variant='Primary'/>
                        <Button handleButton={handleCancel} text="Cancel" hidden={!canEdit} variant="Neutral"/>
                        <Button handleButton={handleDelete} text="Delete" hidden={!canEdit} variant='Danger'/>
                    </>
                )}
                
            </>
        )
    }
}