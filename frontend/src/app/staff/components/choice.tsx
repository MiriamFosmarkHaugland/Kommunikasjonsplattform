import Link from "next/link";
import Image from "next/image";

type Props = {
    image?: string;
    text: string;
    children?: any;
}

export default function Choice({image, text, children}:Props) {

    return(
        <>  <div className="flex flex-col items-center pb-4 pt-4">
                <div className="h-16 w-16 rounded-sm bg-[#f3efea] flex items-center justify-center">
                    <Link href="/staff">
                        {children}
                    </Link>
                    
                </div>
                <h1 className="text-center text-xs">{text}</h1>
            </div>
        </>
    )
}