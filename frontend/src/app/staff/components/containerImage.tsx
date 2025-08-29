import Image from 'next/image';

interface Props {
    name?: string;
    image: string;
}

const imageEndpoint = "http://localhost:5041/images/";

export default function ContainerImage({ name, image }: Props) {
    
    return(
        <>
            <div>
                <div className="h-28 w-28 bg-[#f3efea] rounded-sm overflow-hidden">
                    <img src={`${imageEndpoint}${image}`} alt="Image" className="w-full h-full rounded-sm object-cover"/>
                </div>
                <h1 className="text-center">{name}</h1>
            </div>
        </>
    )
}