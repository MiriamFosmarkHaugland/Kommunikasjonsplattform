import Link from "next/link";
import Image from "next/image";

export default function Home() {

    return (
        <>
            <Link href="/staff" className="flex flex-col items-center">
                <Image src="/home.png" alt="Home" height="25" width="25"/>
                <h1 className="text-sm">Home</h1>
            </Link>
        </>
    )
}