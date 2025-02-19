import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://adrian:A12miasE41ntLYQ0@cluster0.k0eev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDB connected");
    } catch (err) {
        console.error(`Error: ${err}`);
        process.exit(1);
    }
};

export default connectDB;
