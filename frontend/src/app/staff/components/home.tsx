import Link from "next/link";
import Image from "next/image";

export default function Home() {

    return (
        <>
            <Link href="/staff" className="flex flex-col items-center w-24">
                <Image src="/home.png" alt="Home" height="24" width="24"/>
                <h1 className="text-sm">Home</h1>
            </Link>
        </>
    )
}