"use client";
import Link from "next/link"
import { useState } from "react";
import ContainerImage from "../components/containerImage";
import { useEffect } from "react";
import Home from "../components/home";
import Image from "next/image";
import AddIcon from "../components/icons/addIcon";
import Choice from "../components/choice";
import TopBar from "../components/topBar";
import Post from "../components/icons/postIcon";
import CountIcon from "../components/icons/countIcon";
import MessageIcon from "../components/icons/messageIcon";
import CalendarIcon from "../components/icons/calendarIcon";
import DocumentIcon from "../components/icons/documentIcon";
import Register from "../components/register";

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
            <TopBar leftItem={<Home/>} middleItem="Class 1A" rightItem={<Register/>}></TopBar>

            <div className="grid grid-cols-5 pl-2 pr-2">
                <Choice text="Count">
                    <CountIcon className="w-10 h-10"/>
                </Choice>
                <Choice text="Message">
                    <MessageIcon className="w-10 h-10" />
                </Choice>
                <Choice text="Post">
                    <Post className="w-10 h-10" />
                </Choice>
                <Choice text="Calendar">
                    <CalendarIcon className="w-10 h-10" />
                </Choice>
                <Choice text="Documents">
                    <DocumentIcon className="w-10 h-10" />
                </Choice>
            </div>
            
            {childrenList.length === 0 ? (
                <div className="flex flex-col items-center justify-center">
                    <p>There are no children found.</p>
                </div>
            ) : (
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center pl-2 pr-2">
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