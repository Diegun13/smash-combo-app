import connectMongoDB from "../../../lib/mongodb"
import Combo from "../../models/Combos"
import { NextResponse } from "next/server"

export async function POST(request){
    const{ name, movelist} = await request.json()
    await connectMongoDB()
    await Combo.create({name, movelist})
    return NextResponse.json({message: "testone"}, {status: 201})
}