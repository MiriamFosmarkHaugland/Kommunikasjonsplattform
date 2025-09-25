import EmptyImage from "./icons/emptyImage";
interface Props {
    name?: string;
    image: string;
}

export default function LabelledImage({ name, image}: Props) {
    return (
        <div className="flex flex-col items-between">
            <div className=" flex justify-center h-28 w-28 bg-[#f8f8f8] rounded-sm text-gray-400">
                {image ? (
                    <img src={image} alt="Bilde" className="w-full h-full rounded-sm object-cover"/>
                ) : (
                    <p className="flex items-center">{<EmptyImage/>}</p>
                )}
            </div>
            <h1 className="text-center">{name}</h1>
        </div>
    );
}
