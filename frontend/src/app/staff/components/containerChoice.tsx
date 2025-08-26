import Link from "next/link";
import Image from "next/image";

type Props = {
    image: string;
    text: string;
}

export default function ContainerChoice({image, text}:Props) {

    return(
        <>  <div className="flex flex-col items-center pb-4 pt-5">
                <div className="h-16 w-16 rounded-lg bg-[#f3efea] flex items-center justify-center">
                    <Link href="/staff">
                        <Image src={image} alt="Icon" width="40" height="40"/>
                        
                    </Link>
                    
                </div>
                <h1 className="text-center text-xs">{text}</h1>
            </div>
        </>
    )
}