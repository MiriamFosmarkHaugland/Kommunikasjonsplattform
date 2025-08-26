import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1 className="flex justify-center text-xl">Welcome</h1>
    <div className="flex justify-evenly pt-8">
      <Link href="/staff">Staff</Link>
    </div>
    </>
  );
}
