
import mongoose, { now } from "mongoose";
const { Schema, model } = mongoose

const postSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    tags: { type: [String] },
    createdAt: { type: Date, default: Date.now }
});

// sets createdAt parameter equal to the current time
postSchema.pre('save', function(next){
    if(!this.createdAt){
        this.createdAt = new Date();
    }

    next()
})

const Post = model('Post', postSchema)

export default Post;