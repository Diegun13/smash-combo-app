import mongoose from 'mongoose'

const connectMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongo connection successful")
    }catch(error){
        throw new Error("err connting to mongodb")
    }
}
export default connectMongoDB