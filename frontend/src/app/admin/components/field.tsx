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
    if(hidden) return null;
    return (
        <tr>
            <td className="w-full font-medium text-gray-600 border-t border-b border-gray-400">{title}</td>
            <td className="border-t border-b border-l pl-2 border-gray-400">
                <input onChange={onChange} value={value} type={type} name={name} required={required} disabled={disabled} placeholder={placeholder} className="block h-8 w-full disabled:border-none"></input>
            </td>
        </tr>
    )
}