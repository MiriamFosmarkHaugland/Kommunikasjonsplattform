import EditIcon from './icons/editIcon';

interface Props {
    onClick?: () => void;
}

export default function Edit(props: Props) {
    
    return (
        <button onClick={props.onClick} className="flex flex-col items-center w-24">
            <EditIcon className="w-8 h-8"/>
        </button>
    )
}