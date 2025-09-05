import { FormEvent } from "react";

interface Props {
    onSubmit: () => Promise<void>;
    children: React.ReactNode;
}

export default function Form({children, onSubmit
}: Props) {
    
    function handleBeforeSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onSubmit();
    }

    return (
        <form className="px-4" onSubmit={handleBeforeSubmit}>
            {children}
        </form>
    )
}