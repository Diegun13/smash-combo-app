


interface People {
    _id?: string
    img?: string
    name?: string
    combos?: object
    ids?: string
}

export default function CharWindow({peps} : {peps: People}){
    console.log(peps)
    return(
        <section className="bg-rose-400 flex flex-col justify-center text-center">
            <h1>{peps.name}</h1>
            image placeholder
            <div>{peps.name} combo</div>
        </section>
    )
}