interface Props {
    name: string;
    lastName: string;
    profileImage: string;
}

const imageEndpoint = "http://localhost:5041/images/";

export default function Container({ name, lastName, profileImage }: Props) {
    
    return(
        <>
        <div className="fill-black h-20 w-20 border">
            <h1>{name}.{lastName}</h1>
            <img src={`${imageEndpoint}${profileImage}`} alt="ProfileImage" />
        </div>
        </>
    )
}