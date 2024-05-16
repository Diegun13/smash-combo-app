import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGO_URL4)
mongoose.Promise = global.Promise

const comboSchema = new Schema(
    {
        name: String,
        movelist: String,
        isTrue: Boolean
    }
)

const Combo = mongoose.models.combomodel || mongoose.model("combomodel", comboSchema)

export default Combo