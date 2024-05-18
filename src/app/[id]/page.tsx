import GetCombos from "../api/Combos/GetCombos"
import ComboWin from "../_componets/ComboWin"

interface combos{
    id: string
    moves: string
    isTrue: boolean
    notes: string
}

interface people{
    id: string
    name: string
    combos: Array<combos>
    ids:string
    img:string
}

export async function generateStaticParams() {
    const res = await GetCombos()
    const iceMan = res.map((item:people)=> ( {id: item.name}))
return [...iceMan]
}

async function getPeople(id: string){
    const res = await GetCombos()
    let hash = new Map()
    for(let i = 0; i < res.length; i++){
        if(!hash.get(res[i].name)){
            hash.set(res[i].name, i)
        }
    }
    return res[hash.get(id)]
}

export default async function Page({ params }: {
    params: {id: string}
}){
    const Meet:people = await getPeople((params.id))
    let listofPeople = Meet.combos.map((item:combos)=> <ComboWin key={item.id} combos={item}/>)
    return(
        <main className=" pt-8 text-center justify-center items-center bg-rose-400 h-dvh">
            <h1>ID: {Meet.name}</h1>
            <section className="flex flex-wrap gap-2">
            {listofPeople? listofPeople : `notheing here for ${params.id}`}
            </section>
        </main>
    )
}