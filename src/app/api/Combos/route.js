import connectMongoDB from "../../lib/mongodb"
import { NextResponse } from "next/server"
import Combo from "../../models/Combos"

export  default async function GetCombos(){
   try{ 
    await connectMongoDB()
    const res = JSON.parse(JSON.stringify(await Combo.find()))
    return res //NextResponse.json(res)

    }catch(error){
        return NextResponse.json({error: error.message})
        
    }
    
}