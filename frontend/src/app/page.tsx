import Link from "next/link";
import RightArrowIcon from "./admin/components/icons/rightArrowIcon";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen">
        <div className="flex items-center h-1/3 bg-[#f8f8f8] pl-8">
          <h1 className="text-2xl">Log inn</h1>
        </div>

        <div className="flex flex-col p-8 text-xl gap-8">
          <Link href="/login" className="flex items-center justify-between">Barnehage
            <RightArrowIcon className="w-8 h-8"/>
          </Link>
          <Link href="/login" className="flex items-center justify-between">Grunnskole
            <RightArrowIcon className="w-8 h-8"/>
          </Link>
          <Link href="/login" className="flex items-center justify-between">Videregående
            <RightArrowIcon className="w-8 h-8"/>
          </Link>
        </div>
      </div>
    </>
  );
}