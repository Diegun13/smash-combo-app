import { AppProps } from "next/app"
export default function CharWindow({name}:AppProps){
    return(
        <>
        <p className="bg-rose-500">{name}</p>
        </>
    )
}