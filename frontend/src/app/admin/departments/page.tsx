"use client";
import Form from "../components/form"
import Field from "../components/field";

export default function DepartmentsPage() {

    async function handleSubmit(formData: FormData) {
        const response = await fetch("http://localhost:5041/api/departments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        });
        if (!response.ok) {
            console.error("Failed to create department");
            return;
        } else {
            console.log("Department created successfully");
        }
    }

    return (
        <>
            <Form handleSubmit={handleSubmit} title="Create Department">
                <Field title={"Enter name: "} type={'text'} name={'name'}></Field>
                <Field title={"Enter room number: "} type={'text'} name={'room_number'}></Field>
                <Field title={"Enter room type: "} type={'text'} name={'room_type'}></Field>
                <Field title={"Enter room capacity: "} type={'text'} name={'capacity'}></Field>
            </Form>
        </>
    );
}