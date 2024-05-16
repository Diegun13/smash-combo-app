import connectMongoDB from "../../../lib/mongodb"
import { NextResponse } from "next/server"
import Combo from "../../models/Combos"

export  default async function GetChar(){
   try{ 
    // let data = await connectMongoDB()
    // const res = data.json
    const feet = JSON.parse(JSON.stringify(await Combo.find()))
    return feet

    }catch(error){
        return  "stuff not working" //NextResponse.json({error: error.message})
        
    }
    
}