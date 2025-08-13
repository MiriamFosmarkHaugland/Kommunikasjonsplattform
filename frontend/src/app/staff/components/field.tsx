import { HTMLInputTypeAttribute } from "react";

interface Props {
    title: string;
    type: HTMLInputTypeAttribute;
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    disabled?: boolean;
    value?: string;
}

export default function Field({ title, type, name, onChange, required = false, disabled = false, value }: Props) {

    return (
        <>
            <label className="block pt-8"> {title}
                <input onChange={onChange} value={value || ""} type={type} name={name} required={required} disabled={disabled} className="border rounded-sm block w-full disabled:border-none"></input>
            </label>
        </>
    )
}

