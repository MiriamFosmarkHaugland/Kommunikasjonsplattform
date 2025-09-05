import Link from "next/link";
import LeftArrowIcon from "../admin/components/icons/leftArrowIcon";

export default function LoginPage() {
    return(
        <>
        <div className="w-screen h-screen">
            <Link href="/">
                <LeftArrowIcon/>
            </Link>
            
            <div className="flex items-center h-1/3 bg-[#f8f8f8] pl-8">
                <h1 className="text-2xl">Grunnskole</h1>
            </div>
            
            <div className="flex flex-col p-8 text-xl gap-8">
                <p className="text-sm">Velg verifikasjons metode</p>
                <Link href="/admin" className="flex justify-center p-2 bg-[#0061ee] rounded-sm text-sm text-white">Log inn med MitID</Link>
                <Link href="/admin" className="flex justify-center p-2 bg-[#ff4b00] rounded-sm text-sm text-white">Log inn med Vipps</Link>
                <Link href="/admin" className="flex justify-center p-2 bg-[#3e0f4f] rounded-sm text-sm text-white">Log inn med BankID</Link>
                <Link href="/admin" className="flex justify-center p-2 bg-[#141e2d] rounded-sm text-sm text-white">Log inn med ID-Porten</Link>
            </div>
        </div>
        </>
    );
}

