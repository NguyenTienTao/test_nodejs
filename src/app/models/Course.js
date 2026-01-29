import mongoose, { Schema } from "mongoose";
import MongooseDelete from "mongoose-delete";

const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: { type: String, minLength: 1 },
    description: String,
    image: String,
    videoId: String,
    slug: String,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    deleteAt: Date
});

Course.query.sortable = function(req, res) {
    if (res.locals._sort.enabled) {
        const invalidType = ["asc", "desc"].includes(res.locals._sort.type)
        this.sort({ [req.query.column]: invalidType ? res.locals._sort.type : "desc" });
    }
    return this;
}

Course.plugin(MongooseDelete, { 
    deletedAt : true,
    overrideMethods: 'all'
})

export default mongoose.model("Course", Course);
