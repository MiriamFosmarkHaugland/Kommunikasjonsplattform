import Link from "next/link";

export default function StaffPage() {
    return(
        <>
            <h1 className="flex justify-center text-2xl">Overview</h1>
            <div className="flex justify-evenly pt-8">
                <Link href="/staff/departments">Departments</Link>
                <Link href="/staff/children">Children</Link>
            </div>
        </>
    );
}

