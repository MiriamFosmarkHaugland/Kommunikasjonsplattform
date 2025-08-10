"use client";
import Link from "next/link"
import { useState } from "react";
import Container from "../components/container";
import { useEffect } from "react";

type Child = {
    id: string;
    first_name: string;
    last_name: string;
    date_of_birth: string;
    profile_image: string;
}

export default function ChildrenPage() {
    
    const [childrenList, setChildrenList] = useState<Child[]>([]);

    useEffect(() => {
        fetchChildren();
    }, []);

    async function fetchChildren() {
        try {
            const response = await fetch("http://localhost:5041/api/children");
            const data = await response.json();
            setChildrenList(data);
            console.log("Children fetched successfully:", data);
        } catch (error) {
            console.error("Error fetching children:", error);
        }
    }
    return (
        <>
            <div className="flex justify-center pt-8">
                <Link href="/admin/children/create">Register new child</Link>
            </div>
            
            {childrenList.length === 0 ? (
                <h1>Empty</h1>
            ) : (
                <div className="grid grid-cols-3 p-4 gap-5 place-items-center">
                    {childrenList.map((child) => (
                        <Container key={child.id} name={child.first_name} lastName={child.last_name} profileImage={child.profile_image}></Container>
                ))}
                </div>
            )}
        </>
    )
} 