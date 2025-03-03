import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        text: { type: String, default: "" },
        photo: { type: String, default: "" },
        felling: {
            type: new Schema({
                emoji: { type: String, default: "" },
                text: { type: String, default: "" },
                color: { type: String, default: "" }
            }, { _id: false }),
            default: {}
        },
        profilePhoto: { type: String, required: true },
        email: { type: String, required: true },
        likes: { type: Number, default: 0},
        comments: { type: String, default: "" },
        shares: { type: Number, default: 0 },
        likedBy: { type: Array, default: [] },
        verified: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default mongoose.model('posts', postSchema);