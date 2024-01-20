import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"
import dotenv from 'dotenv'

dotenv.config()
const connectDB = async()=>{
try{
    console.log(process.env.MONGO_URI);

    const connectionInstance  = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    console.log(connectionInstance.connection.host);
}
catch(error){
    
    console.log("ERROR",error);
    process.exit(1)
}
}
export default connectDB