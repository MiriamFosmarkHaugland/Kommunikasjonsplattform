"use client";
import { use, useEffect, useState } from 'react';
import { Child } from '../page';
import Home from '../../components/home';
import Edit from '../../components/edit';
import Form from '../../components/form';
import Field from '../../components/field';

// Dynamic route segment for child details
interface Props {
    params: Promise<{ id: string }>;
}

const imageEndpoint = "http://localhost:5041/images/";

export default function ChildPage({ params }: Props) {
    const [canEdit, setCanEdit] = useState(false);
    const [child, setChild] = useState<Child>();
    const { id } = use(params);

    useEffect(() => {
        fetchChild();
    }, []);

    async function fetchChild() {
        try {
            const response = await fetch(`http://localhost:5041/api/children/${id}`);
            const data = await response.json();
            setChild(data);
            console.log("Child fetched successfully:", data);
        } catch (error) {
            console.error("Error fetching child:", error);
        }
    }

    async function handleSubmit() {

    }

    async function handleImage() {

    }

    async function handleEdit() {
        setCanEdit(!canEdit);
    }


    return (
        <>
            <div className='flex justify-between'>
                <Home/>
                <Edit onClick={handleEdit}/>
            </div>
            <div className='flex flex-col items-center'>
                <div className='h-24 w-24 border rounded-lg overflow-hidden'>
                    <img src={`${imageEndpoint}${child?.profile_image}`} alt="Profile image" className="rounded-lg"/>
                </div>
                <h1>{child?.first_name}</h1>
            </div>

            
            <Form handleSubmit={handleSubmit} title="">
                <Field title={"Name: "} value={child?.first_name} type={'text'} name={'firstName'} required disabled={!canEdit} />
                <Field title={"Lastname:"} value={child?.last_name} type={'text'} name={'lastName'} required disabled={!canEdit} />
                <Field title={"Date og birth: "} value={child?.date_of_birth} type={'date'} name={'dateOfBirth'} required disabled={!canEdit} />
                <Field onChange={handleImage} title={"Add profile picture:"} type={'file'} name={'image'} disabled={!canEdit} />
            </Form>
        </>
    )
}