interface Props {
    name: string;
    lastName: String;
    image: string;
}

const imageEndpoint = "http://localhost:5041/images/";

export default function ShortDetails({ name, lastName, image }: Props) {
    
    return(
        <>
            <div className="flex w-full p-4">
                <div className="h-28 w-28 bg-[#f3efea] rounded-sm">
                    <img src={`${imageEndpoint}${image}`} alt="Image" className="w-full h-full rounded-sm object-cover"/>
                </div>
                <div className="flex flex-col pl-4 justify-between">
                    <h1 className="text-xl font-medium">{name} {lastName}</h1>
                        <p>1st grade - Class 1A</p>
                        <p>+47 832 27 456</p>
                </div>
            </div>
        </>
    )
}