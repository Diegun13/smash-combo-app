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

export default function ComboWin({ combos }: { combos: combos }) {
  return (
    <main className=" h-25 w-80 my-5 text-center bg-rose-900  rounded-md">
      <p>Moves: {combos.moves}</p>
      <p>Is True: {`${combos.isTrue}`}</p>
      <p>Percent: {combos.startingPercent}</p>
      <video
      className="h-56 w-96"
        loop
        autoPlay
        muted
        src={combos.gif}
      />
      <p>Notes: {combos.notes}</p>
    </main>
  );
}
