import { HTMLInputTypeAttribute } from "react";

interface Props {
    title: string;
    type: HTMLInputTypeAttribute;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    disabled?: boolean;
    value?: string;
    hidden?: boolean;
}

export default function Field({ title, type, onChange, required = false, disabled = false, value , hidden}: Props) {
    if(hidden) return null;
    return (
        <tr>
            <td className="w-1/2 pl-4 font-medium text-gray-600 border-t border-b border-gray-400">{title}</td>
            <td className="w-1/2 border-t border-b border-l pl-4 border-gray-400">
                <input onChange={onChange} value={value} type={type} required={required} disabled={disabled} className="block h-8 w-full disabled:border-none"></input>
            </td>
        </tr>
    )
}