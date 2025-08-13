interface Props {
        children: React.ReactNode;
        handleSubmit: (formData: FormData) => Promise<void>;
        title: string;
    }

export default function Form({children, handleSubmit, title}: Props) {
    
    return (
        <div className="pl-4 pr-4">
            <h1 className="text-2xl flex justify-center">{title}</h1>
            <form action={handleSubmit}>
                {children}

                <div className="flex justify-center pt-8">
                    <button type="submit" className="w-50 h-10 shadow rounded-full bg-[#075fd5] text-white">Submit</button>
                </div>
            </form>
        </div>
    )
}