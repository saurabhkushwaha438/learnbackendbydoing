import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import util from "util"

const connectDB = async ()=>{
    try {
        const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST(debugg): ${util.inspect(connectionInstance, { showHidden: false, depth: null, colors: true })}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("mongodb connection error",error);
        process.exit(1)
    }
}

export default connectDB