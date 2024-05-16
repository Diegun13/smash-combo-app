import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGO_URL4)
mongoose.Promise = global.Promise

const comboSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    moveList: {
        type: String,
        required: true,
    },
    isTrue: {
        type: Boolean
    }
})

const Combo = mongoose.models.combomodel || mongoose.model("combomodel", comboSchema)

export default Combo