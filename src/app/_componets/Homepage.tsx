import CharWindow from "./CharWindow"
import GetCombos from "../api/Combos/GetCombos";
 


export default async function Homepage(){
    let char = await GetCombos()


interface People {
    _id?: string
    img?: string
    name?: string
    combos?: object
    ids?: string
}


    // let char = ["sheik", "corrion", "marth", "fox"]
    let characterSelect = char.map((item: People) => (
        <CharWindow key={item.ids} peps={item} />
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