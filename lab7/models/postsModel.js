import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostsSchema = new Schema({
    id: Number,
    avatar: String,
    verified: Boolean,
    username: String,
    text: String,
    image: String,
    countComments: Number,
    countLikes: Number,
    countRetweets: Number,
    isLiked: Boolean
})

export const Posts = new mongoose.model('posts', PostsSchema);