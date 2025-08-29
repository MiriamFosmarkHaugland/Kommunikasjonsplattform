type Props = {
    handleButton: (formData: FormData) => Promise<void>;
    hidden?: boolean;
    text: string;
    variant: keyof typeof ButtonVariants;
}

const ButtonVariants = {
    Primary: "bg-[#2463eb]",
    Danger: "bg-[#db5d59]",
    Neutral: "bg-[#999999]"
}

export default function Button({ handleButton, hidden, text, variant }: Props) {
    return (
        <>
            <div className="flex justify-center pt-4 pl-4 pr-4">
                <button formAction={handleButton} type="submit" hidden={hidden} className={`w-full h-10 shadow rounded-sm text-white ${ButtonVariants[variant]}`}>{text}</button>
            </div>
        </>
    )
}