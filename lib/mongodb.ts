import mongoose from "mongoose";

const connectMongo = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@${process.env.DB_HOST}/?retryWrites=true&w=majority`)
    } catch (e) {
        console.log(e)
    }
}
export default connectMongo
