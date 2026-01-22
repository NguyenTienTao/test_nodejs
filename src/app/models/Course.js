import mongoose, { Schema } from "mongoose";

const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: { type: String, minLength: 1 },
    description: String,
    image: String,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

export default mongoose.model("Course", Course);
