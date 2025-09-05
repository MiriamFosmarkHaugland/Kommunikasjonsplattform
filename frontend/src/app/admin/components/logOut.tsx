import Link from "next/link";
import LogOutLeftIcon from "./icons/logOutLeftIcon";

export default function LogOut() {
    return (
        <Link href="/">
            <LogOutLeftIcon className="w-8 h-8"/>
        </Link>
    )
}