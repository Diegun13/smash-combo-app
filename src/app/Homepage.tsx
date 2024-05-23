import CharacterWin from "./_componets/CharacterWin";
import GetCombos from "./api/Combos/GetCombos";

interface combos {
  id: string;
  moves: string;
  isTrue: boolean;
  notes: string;
  doesKill: boolean;
  startingPercent: number;
}
interface People{
  _id: string
  name: string
  combos: Array<combos>
  ids:string
  img:string
}

export default async function Homepage() {

  let char = await GetCombos();
  let characterSelect = char.map((item: People) => (
    <CharacterWin key={item.ids} char={item} />
  ));

  return (
    <>
      <div className="flex flex-col bg-rose-900  h-screen pt-8 text-center">
        <h1>Select Your character</h1>
        <section className=" flex gap-1 items-center justify-center">
          {characterSelect}
          </section>
      </div>
    </>
  );
}
