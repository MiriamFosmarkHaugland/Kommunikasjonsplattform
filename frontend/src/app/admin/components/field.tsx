import { HTMLInputTypeAttribute } from "react";

interface Props {
    title: string;
    type: HTMLInputTypeAttribute;
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export default function Field({ title, type, name, onChange, required = false }: Props) {

    return (
        <>
            <label className="block pt-8"> {title}
                <input onChange={onChange} type={type} name={name} className="border rounded-sm block w-full" required={required} />
            </label>
        </>
    )
}

