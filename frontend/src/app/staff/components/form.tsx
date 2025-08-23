interface Props {
        children: React.ReactNode;
    }

export default function Form({children}: Props) {
    
    return (
        <div className="pl-4 pr-4">
            <form>
                {children}
            </form>
        </div>
    )
}