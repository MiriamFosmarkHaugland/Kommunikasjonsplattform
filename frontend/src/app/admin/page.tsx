import Link from "next/link";

export default function AdminPage() {
    return(
        <>
            <h1 className="flex justify-center text-2xl">Admin</h1>
            <div className="flex justify-evenly pt-8">
                <Link href="/admin/departments">Departments</Link>
                <Link href="/admin/children">Children</Link>
            </div>
        </>
    );
}

