import TopBar from "./components/topBar";
import LogOut from "./components/logOut";
import Link from "next/link";
import LabelledImage from "./components/labelledImage";

export default function AdminPage() {
    return (
        <>
            <TopBar leftItem={<LogOut/>} middleItem={"Admin"} rightItem={""}/>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center px-2 pt-4">
                <Link href="/admin/level">
                    <LabelledImage image="/årstrinn.jpg" name="Årstrinn"/>
                </Link>
                <LabelledImage image="/alle_elever.jpg" name="Alle elever"/>
                <LabelledImage image="/ansatte.jpg" name="Ansatte"/>
                <LabelledImage image="/oppslag.jpg" name="Oppslag"/>
                <LabelledImage image="/kalender.jpg" name="Kalender"/>
                <LabelledImage image="/dokumenter.jpg" name="Dokumenter"/>
            </div>
        </>
    )
}