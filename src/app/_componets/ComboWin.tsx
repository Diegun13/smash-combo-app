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

export default function ComboWin({combos}: {combos:combos}){
    return(
        <>
        <p>moves: {combos.moves}</p>
        <p>is true, : {`${combos.isTrue}`}</p>
        <video controls loop autoPlay muted

            src="https://utfs.io/f/66bee21e-1623-42ef-b24c-c1eb70bbb4a7-1b9fr.mp4"
            width={500}
            height={500}
            />
        </>
    )
}