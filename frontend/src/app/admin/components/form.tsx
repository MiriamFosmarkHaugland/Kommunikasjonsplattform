interface Props {
        children: React.ReactNode;
        handleSubmit: (formData: FormData) => Promise<void>;
        title: string;
    }

export default function Form({children, handleSubmit, title}: Props) {
    
    return (
        <div className="pl-8 pr-8">
            <h1 className="text-3xl flex justify-center">{title}</h1>
            <form action={handleSubmit}>
                {children}

                <div className="flex justify-center pt-8">
                    <button type="submit" className="w-1/3 h-8 border rounded-sm bg-blue-600">Submit</button>
                </div>
            </form>
        </div>
    )
}

