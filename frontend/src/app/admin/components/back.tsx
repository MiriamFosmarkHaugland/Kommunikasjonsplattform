"use client";
import LeftArrowIcon from './icons/leftArrowIcon';
import { useRouter } from 'next/navigation';

export default function Back() {
    const router = useRouter()
    return (
        <button onClick={() => router.back()}>
            <LeftArrowIcon className="w-8 h-8"/>
        </button>
    )
}