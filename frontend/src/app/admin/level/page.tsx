"use client";
import Link from "next/link";
import LeftArrowIcon from "../components/icons/leftArrowIcon";
import TopBar from "../components/topBar";
import LabelledImage from "../components/labelledImage";
import Back from "../components/back";

export default function LevelPage() {

    return (
        <>
            <TopBar leftItem={<Back />} middleItem="Årstrinn" rightItem=""/>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center px-2 pt-4">
                <Link href={"/admin/level/group"}>
                    <LabelledImage image="/1klasse.png" name="1.Klasse"></LabelledImage>
                </Link>
                <LabelledImage image="" name="2.Klasse"></LabelledImage>
                <LabelledImage image="" name="3.Klasse"></LabelledImage>
                <LabelledImage image="" name="4.Klasse"></LabelledImage>
                <LabelledImage image="" name="5.Klasse"></LabelledImage>
                <LabelledImage image="" name="6.Klasse"></LabelledImage>
                <LabelledImage image="" name="7.Klasse"></LabelledImage>
                <LabelledImage image="" name="8.Klasse"></LabelledImage>
                <LabelledImage image="" name="9.Klasse"></LabelledImage>
                <LabelledImage image="" name="10.Klasse"></LabelledImage>
            </div>
        </>
    );
}