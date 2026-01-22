import mongoose from "mongoose";
import "dotenv/config";

const uri = process.env.MONGO_URI;

console.log(uri);

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Kết nối thành công!!!");
    } catch (error) {
        console.log(error);
    }
}

export { connect };
