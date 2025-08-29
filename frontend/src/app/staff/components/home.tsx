import Link from "next/link";
import Image from "next/image";
import HomeIcon from "./icons/homeIcon";

export default function Home() {

    return (
        <>
            <Link href="/staff" className="flex flex-col items-center w-24">
                <HomeIcon className="w-8 h-8"/>
            </Link>
        </>
    )
}