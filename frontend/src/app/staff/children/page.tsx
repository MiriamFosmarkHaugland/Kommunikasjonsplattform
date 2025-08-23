"use client";
import Link from "next/link"
import { useState } from "react";
import ContainerImage from "../components/containerImage";
import { useEffect } from "react";
import Home from "../components/home";
import Image from "next/image";
import Register from "../components/register";
import ContainerChoice from "../components/containerChoice";

export type Child = {
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
            <div className="flex justify-between pt-12">
                <Home/>
                <h1 className="text-2xl">Swans</h1>
                <Register/>
            </div>

            <div className="grid grid-cols-5">
                <ContainerChoice image={"/counting.png"} text="Count"/>
                <ContainerChoice image={"/message.png"} text="Message"/>
                <ContainerChoice image={"/post.png"} text="Post"/>
                <ContainerChoice image={"/calendar.png"} text="Calendar"/>
                <ContainerChoice image={"/document.png"} text="Documents"/>
            </div>
            
            {childrenList.length === 0 ? (
                <h1>There are no children found.</h1>
            ) : (
                <div className="grid grid-cols-3 gap-4 place-items-center">
                    {childrenList.map((child) => (
                        <Link href={'/staff/children/' + child.id} key={child.id}>
                            <ContainerImage key={child.id} name={child.first_name} image={child.profile_image}></ContainerImage>
                        </Link>
                ))}
                </div>
            )}
        </>
    )
} 