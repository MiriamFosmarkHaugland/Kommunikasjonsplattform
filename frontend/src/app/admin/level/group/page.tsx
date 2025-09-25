import TopBar from "../../components/topBar"
import Back from "../../components/back"
import Link from "next/link"
import LabelledImage from "../../components/labelledImage"

export default function GroupPage() {
    return(
        <>
            <TopBar leftItem={<Back/>} middleItem={"1.Klasse"} rightItem={""}/>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center px-2 pt-4">
                <Link href={"/admin/level/group/users"}>
                    <LabelledImage image="" name="1.A"></LabelledImage>
                </Link>
                <LabelledImage image="" name="1.B"></LabelledImage>
                <LabelledImage image="" name="1.C"></LabelledImage>
                <LabelledImage image="" name="1.D"></LabelledImage>
            </div>
        </>
    )
}