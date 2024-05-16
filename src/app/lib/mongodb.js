import mongoose from 'mongoose'
import { NextResponse } from 'next/server';

export default async function connectMongoDB(){
    try{
        if (mongoose.connection.readyState === 0) {
           await mongoose.connect(process.env.MONGO_URL4);
        console.log("mongo connection successful")
        
        }
    }catch(error){
        throw new Error("err connting to mongodb")
    }
}
