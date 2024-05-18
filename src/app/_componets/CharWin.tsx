import Link from "next/link";
import ComboWin from "./ComboWin";
import Image from "next/image";
interface combos {
  id: string;
  moves: string;
  isTrue: boolean;
  notes: string;
}
interface People {
  _id: string;
  name: string;
  combos: Array<combos>;
  ids: string;
  img: string;
}
export default function CharWin({ char }: { char: People }) {
  return (
    <>
      <main className="bg-rose-400 flex flex-col text-center justify-center items-center">
        <Link href={`/${char.name}`}>
          <p className="absolute text-center self-center bg-slate-400">{char.name}</p>
          <Image
          src={char.img}
          width={100}
          height={100}
          alt={char.name}
          />
        </Link>
      </main>
    </>
  );
}
