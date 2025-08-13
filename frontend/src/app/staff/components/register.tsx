import Image from "next/image";
import Link from "next/link";

export default function Register() {
    return(
        <>
            <Link href="/staff/children/register" className="flex flex-col items-center">
                <Image src="/plus.png" alt="Register" height="25" width="25"/>
                <h1 className="text-sm">Register new</h1>
            </Link>
        </>
    )
}