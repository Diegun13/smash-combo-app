import { AppProps } from "next/app"
export default function CharWindow({name} : {name:string}){
    return(
        <>
        <p className="bg-rose-500">{name}</p>
        </>
    )
}