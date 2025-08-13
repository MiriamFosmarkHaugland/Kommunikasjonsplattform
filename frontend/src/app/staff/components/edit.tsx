import Link from 'next/link';
import Image from 'next/image';

interface Props {
    onClick?: () => void;
}

export default function Edit(props: Props) {
    
    return (
        <Link href="" onClick={props.onClick}>
            <Image src="/edit.png" alt="Edit" height="25" width="25"/>
            <h1 className="text-sm">Edit</h1>
        </Link>
    )
}