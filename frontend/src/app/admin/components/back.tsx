import Link from 'next/link';
import LeftArrowIcon from './icons/leftArrowIcon';

export default function Back() {
    return (
        <Link href='/admin/unit/children/'>
            <LeftArrowIcon className="w-8 h-8"/>
        </Link>
    )
}