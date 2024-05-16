import { AppProps } from "next/app"
export default function CharWindow({name} : {name:string}){
    return(
        <section className="bg-rose-400 flex flex-col justify-center text-center">
            <h1>{name}</h1>
            image placeholder
            <div>{name} combo</div>
        </section>
    )
}