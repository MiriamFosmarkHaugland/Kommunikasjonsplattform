"use client";
import Link from "next/link"
import { useState, useEffect } from "react";
import LabelledImage from "../../../components/labelledImage";
import Home from "../../../components/home";
import Choice from "../../../components/choice";
import TopBar from "../../../components/topBar";
import Post from "../../../components/icons/postIcon";
import CountIcon from "../../../components/icons/countIcon";
import MessageIcon from "../../../components/icons/messageIcon";
import CalendarIcon from "../../../components/icons/calendarIcon";
import DocumentIcon from "../../../components/icons/documentIcon";
import Register from "../../../components/register";
import { User } from "@/lib/types/user";

const imageEndpoint = "http://localhost:5041/images/";

export default function UserPage() {
    
    const [userList, setUserList] = useState<User[]>([]);

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        try {
            const response = await fetch("http://localhost:5041/api/user");
            const data = await response.json();
            setUserList(data);
            console.log("User fetched successfully:", data);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    }
    return (
        <>
            <TopBar leftItem={<Home/>} middleItem="Klasse 1A" rightItem={<Register/>}></TopBar>

            <div className="grid grid-cols-5 pl-2 pr-2">
                <Choice text="Opprop">
                    <CountIcon className="w-10 h-10"/>
                </Choice>
                <Choice text="Melding">
                    <MessageIcon className="w-10 h-10" />
                </Choice>
                <Choice text="Oppslag">
                    <Post className="w-10 h-10" />
                </Choice>
                <Choice text="Kalender">
                    <CalendarIcon className="w-10 h-10" />
                </Choice>
                <Choice text="Dokumenter">
                    <DocumentIcon className="w-10 h-10" />
                </Choice>
            </div>
            
            {userList.length === 0 ? (
                <div className="flex flex-col items-center justify-center">
                    <p>Ingen brukere funnet.</p>
                </div>
            ) : (
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center px-2">
                    {userList.map((user) => (
                        <Link href={'/admin/level/group/users/' + user.id} key={user.id}>
                            <LabelledImage key={user.id} name={user.firstName} image={`${imageEndpoint}${user.image}`}/>
                        </Link>
                ))}
                </div>
            )}
        </>
    )
} 