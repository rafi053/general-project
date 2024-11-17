import mongoose from "mongoose";

const PORT = process.env.PORT ? process.env.PORT : 3000;
const MONGO_URI = process.env.MONGO_URI as string;

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(MONGO_URI)
        console.log("mongo connect: " + connect.connection.host);
    }
    catch (error) {
        console.error(error);
    }
}

export default connectDb;