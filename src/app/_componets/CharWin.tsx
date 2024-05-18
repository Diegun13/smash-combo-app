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
      <main className="bg-rose-400 flex flex-col justify-center text-center">
        <Link href={`/${char.name}`}>
          <p>{char.name}</p>

          <p>{char.img}</p>
        </Link>
      </main>
    </>
  );
}
