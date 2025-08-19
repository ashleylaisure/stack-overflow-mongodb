import { model, models, Schema, Document } from "mongoose";

export interface IUser {
    name: string;
    username: string;
    email: string;
    bio?: string;
    image?: string;
    location?: string;
    portfolio?: string;
    reputation?: number;
}

// Whenever we need to access any default Mongoose-specific fields, 
// we’ll use IUserDoc to define types for that result and make it typesafe.
export interface IUserDoc extends IUser, Document {}

const UserSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    bio: {type: String},
    image: {type: String},
    location: {type: String},
    // change to loc?
    portfolio: {type: String},
    reputation: {type: Number, default: 0},
    },
    // creates a created_at timestamp
    { timestamps: true }
);

// Check if model exists, if not create the User model
const User = models.User || model<IUser>("User", UserSchema);
export default User;
