import Link from "next/link";
import Image from "next/image";
interface combos {
  id: string;
  moves: string;
  isTrue: boolean;
  notes: string;
  doesKill: boolean;
  startingPercent: number;
}
interface People {
  _id: string;
  name: string;
  combos: Array<combos>;
  ids: string;
  img: string;
}
export default function CharacterWin({ char }: { char: People }) {
  return (
    <>
      <Link href={`/${char.name}`}>
        <div className="flex items-center justify-center bg-rose-400">
          <h2 className=" absolute ">{char.name}</h2>
          <Image src={char.img} width={100} height={100} alt={char.name} />
        </div>
      </Link>
    </>
  );
}
