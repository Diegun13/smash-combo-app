import GetCombos from "../api/Combos/GetCombos";
import ComboWin from "../_componets/ComboWin";
import ComboNav from "../_componets/ComboNav";

interface combos {
  id: string;
  moves: string;
  gif: string;
  isTrue: boolean;
  notes: string;
  doesKill: boolean;
  startingPercent: number;
}

interface people {
  id: string;
  name: string;
  combos: Array<combos>;
  ids: string;
  img: string;
}

export async function generateStaticParams() {
  const res = await GetCombos();
  const iceMan = res.map((item: people) => ({ id: item.name }));
  return [...iceMan];
}

async function getPeople(id: string) {
  const people = await GetCombos();
  let hash = new Map();
  for (let i = 0; i < people.length; i++) {
    if (!hash.get(people[i].name)) {
      hash.set(people[i].name, i);
    }
  }
  return people[hash.get(id)];
}

export default async function Page({ params }: { params: { id: string } }) {
  const Meet: people = await getPeople(params.id);
  return (
    <main className=" pt-8 text-center justify-center items-center bg-rose-400 h-dvh">
      <h1>ID: {Meet.name}</h1>
      <ComboNav combos={Meet.combos} charImg={Meet.img}/>
    </main>
  );
}