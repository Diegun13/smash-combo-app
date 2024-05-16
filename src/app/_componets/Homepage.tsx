import Link from "next/link"
import CharWindow from "./CharWindow"
import GetCombos from "../api/Combos/route";
 


export default async function Homepage(){
    let res = await GetCombos()
    console.log(res, "pee")


    let char = ["sheik", "corrion", "marth", "fox"]
    let characterSelect = char.map((item) => (
        <CharWindow key={char.indexOf(item)} name={item} />
        ));
    return(
        <>
        <div className="bg-rose-900">
        <h1>Select Your character</h1>
        <section className="flex gap-4 flex-wrap">
        {characterSelect}
        </section>
        </div>
        </>
    )
}