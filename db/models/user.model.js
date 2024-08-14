import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        minlength: [3, 'name is too short'],
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        minlength: [4, 'password is too short'],
        maxlength: [100, 'password is too long'],
        require: true,
    },
    varified: {
        type: Boolean,
        default: false,
    }
},
    {
        timestamps: true
    });
export const userModel = model("user", userSchema)