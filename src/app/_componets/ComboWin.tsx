interface combos {
  id: string;
  moves: string;
  isTrue: boolean;
  notes: string;
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
    <main className="text-center bg-rose-900 h-25 w-80 rounded-md">
      <p>Moves: {combos.moves}</p>
      <p>Is True: {`${combos.isTrue}`}</p>
      <video
        className="h-56 w-96"
        loop
        autoPlay
        muted
        src="https://utfs.io/f/66bee21e-1623-42ef-b24c-c1eb70bbb4a7-1b9fr.mp4"
      />
      <p>Notes: {combos.notes}</p>
    </main>
  );
}
