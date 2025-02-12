import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {   
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        bio: { type: String, default: "" },
        profilePhoto: { type: String, default: "" },
        coverPhoto: { type: String, default: "" },
        verified: { type: Boolean, default: false },
        email: { type: String, required: true, unique: true },
    },
    { timestamps: true }
);

export default mongoose.model('User', userSchema);