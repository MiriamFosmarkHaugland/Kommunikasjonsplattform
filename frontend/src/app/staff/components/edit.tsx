import Link from 'next/link';
import Image from 'next/image';

interface Props {
    onClick?: () => void;
}

export default function Edit(props: Props) {
    
    return (
        <Link href="" onClick={props.onClick} className="flex flex-col items-center w-24">
            <Image src="/edit.png" alt="Edit" height="24" width="24"/>
            <h1 className="text-sm">Edit</h1>
        </Link>
    )
}