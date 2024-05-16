import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGO_URL)
mongoose.Promise = global.Promise

const comboSchema = new Schema(
    {
        name: String,
        movelist: String,
        isTrue: Boolean
    }
)

const Combo = mongoose.models.Combo || mongoose.model("Combo", comboSchema)

export default Combo