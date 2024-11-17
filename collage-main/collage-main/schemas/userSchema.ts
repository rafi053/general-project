import mongoose, { Schema } from 'mongoose';
import { Grades, User } from "../models/userModel";

const GradesSchema = new Schema<Grades>({
    subject: {
        type: String,
        trim: true
    },

    grade: {
        type: Number,
        trim: true
    }
  });

const UserSchema = new Schema<User>(
    {
        fullName:{
            type: String,
            required: [true,"Please enter full name"],
            // unique: [true, "FullName already exists"],
            trim: true
        } ,
        passportId:{
            type: Number,
            required: [true,"Please enter passport id"],
            minlength: [9,"The passport id must be 9 digits"],
            maxlength: [9,"The passport id must be 9 digits"],
            // unique: [true, "Passport id already exists"],
            trim: true
        },
        password:{
            type: String,
            required: [true,"Please enter password"],
            trim: true
        },
        grades:{
            type:[GradesSchema],
            trim: true
        } ,

        role:{
            type: String,
            required:[ true, "Please enter role"],
            enum: ["admin", "user", "teacher"],
            trim: true
        }
    }
);




export default mongoose.model("USER",UserSchema);

