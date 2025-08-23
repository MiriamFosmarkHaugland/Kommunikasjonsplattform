import { HTMLInputTypeAttribute } from "react";

interface Props {
    title: string;
    type: HTMLInputTypeAttribute;
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    disabled?: boolean;
    value?: string;
    hidden: boolean;
    placeholder?: string;
}

export default function Field({ title, type, name, onChange, required = false, disabled = false, value , hidden, placeholder}: Props) {

    return (
        <>
            <label hidden={hidden} className="block pt-4"> {title}
                <input onChange={onChange} value={value} type={type} name={name} required={required} disabled={disabled} placeholder={placeholder} className="border rounded-sm block h-10 w-full disabled:border-none"></input>
            </label>
        </>
    )
}

