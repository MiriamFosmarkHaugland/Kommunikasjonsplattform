import Link from "next/link"
export default function NotFound() {
    return(
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-white">
                <h1 className="text-4xl font-bold">404</h1>
                <h1>Not Found</h1>
                <p>Could not find requested resource</p>
                <Link href="/" className="underline">Return Home</Link>
            </div>
        </>
    )
}