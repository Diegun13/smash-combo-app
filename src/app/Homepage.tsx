import CharWin from "./_componets/CharWin";
import GetCombos from "./api/Combos/GetCombos";

export default async function Homepage() {
  let char = await GetCombos();

  interface combos{
    id: string
    moves: string
    isTrue: boolean
    notes: string
}
interface People{
    _id: string
    name: string
    combos: Array<combos>
    ids:string
    img:string
}

  let characterSelect = char.map((item: People) => (
    <CharWin key={item.ids} char={item} />
  ));
  return (
    <>
      <div className="bg-rose-900">
        <h1>Select Your character</h1>
        <section className="flex gap-4 flex-wrap">{characterSelect}</section>
      </div>
    </>
  );
}
