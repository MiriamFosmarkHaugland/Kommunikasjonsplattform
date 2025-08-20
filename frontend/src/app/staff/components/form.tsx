interface Props {
        children: React.ReactNode;
        title: string;
    }

export default function Form({children, title}: Props) {
    
    return (
        <div className="pl-4 pr-4">
            <h1 className="text-2xl flex justify-center">{title}</h1>
            <form>
                {children}
            </form>
        </div>
    )
}