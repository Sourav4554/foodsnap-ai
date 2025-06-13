import mongoose from "mongoose";

export const connectDatabase=async()=>{
try {
    await mongoose.connect(`${process.env.MONGODB_URL}`)
    console.log('mongodb connected successfully')
} catch (error) {
    console.log(error)
}
}
