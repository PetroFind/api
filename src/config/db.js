import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("");
        console.log("MongoDB connected");
    } catch (err) {
        console.error(`Error: ${err}`);
        process.exit(1);
    }
};

export default connectDB;
