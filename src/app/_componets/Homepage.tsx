import Link from "next/link"
import CharWindow from "./CharWindow"
export default function Homepage(){
    return(
        <>
        <div className="bg-rose-900 flex flex-wrap">
        <h1>Select Your character</h1>
        <Link href="/Sheik"> <CharWindow name="Sheik"/> </Link>
        <CharWindow name="Marth"/>
        </div>
        </>
    )
}