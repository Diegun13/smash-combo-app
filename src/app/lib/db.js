import mongoose from 'mongoose'

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("mongo connection successful")
    }catch(error){
        throw new Error("err connting to mongodb")
    }
}
export default connect