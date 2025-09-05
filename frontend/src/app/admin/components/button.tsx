type Props = {
    handleButton?: () => Promise<void>;
    hidden?: boolean;
    text: string;
    variant: keyof typeof ButtonVariants;
}

const ButtonVariants = {
    Primary: "bg-[#2b5dcf]",
    Danger: "bg-[#db5d59]",
    Neutral: "bg-[#999999]"
}

export default function Button({ handleButton, hidden, text, variant }: Props) {
    return (
        <button onClick={handleButton} type="submit" hidden={hidden} className={`w-full h-10 shadow rounded-sm text-white ${ButtonVariants[variant]}`}>{text}</button>
    )
}