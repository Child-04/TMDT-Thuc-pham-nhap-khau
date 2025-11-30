import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

async function connectDB(){
    const url = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/shop'

    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        console.log("connected to db")
        console.log("MongoDB URI:", url.substring(0, 20) + "...")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;