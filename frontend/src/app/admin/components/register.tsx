import Link from "next/link";
import AddIcon from "./icons/addIcon";

export default function Register() {
    return(
        <Link href="/admin/unit/children/register" className="flex flex-col items-center w-24">
            <AddIcon className="w-8 h-8"/>
        </Link>
    )
}