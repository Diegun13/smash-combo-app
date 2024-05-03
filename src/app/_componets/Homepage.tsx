import Link from "next/link"
import CharWindow from "./CharWindow"
export default function Homepage(){
    let char = ["sheik", "corrion", "marth"]
    let listOfCombos = char.map((item) => (
        <CharWindow key={char} name={item} />
        ));
    return(
        <>
        <div className="bg-rose-900 ">
        <h1>Select Your character</h1>
        
        {listOfCombos}
        </div>
        </>
    )
}