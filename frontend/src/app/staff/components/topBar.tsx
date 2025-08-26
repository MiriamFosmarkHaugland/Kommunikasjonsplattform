import Home from "@/app/staff/components/home";
import React from "react";

interface Props {
    middleItem: React.ReactNode;
    leftItem: React.ReactNode;
    rightItem: React.ReactNode;
}

export default function TopBar({middleItem, leftItem, rightItem}: Props) {
    return (
        <>
            <div className="top-0 w-full h-24 bg-[#f3efea]">
                <div className="flex justify-between items-center h-full">
                    <div className="w-24 h-11">{leftItem}</div>
                    <h1 className="text-xl relative">{middleItem}</h1>
                    <div className="w-24 h-11">{rightItem}</div>
                </div>
            </div>
        </>
    )
}
