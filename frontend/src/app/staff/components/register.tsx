import Image from "next/image";
import Link from "next/link";

export default function Register() {
    return(
        <>
            <Link href="/staff/children/register" className="flex flex-col items-center w-24">
                <Image src="/plus.png" alt="Register" height="24" width="24"/>
                <h1 className="text-sm">Register</h1>
            </Link>
        </>
    )
}