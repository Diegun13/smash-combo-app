import mongoose from 'mongoose'

const connectMongoDB = async () => {
    try{
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGO_URL4);
        console.log("mongo connection successful")
        }
    }catch(error){
        throw new Error("err connting to mongodb")
    }
}
export default connectMongoDB