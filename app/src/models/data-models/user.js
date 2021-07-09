import mongoose from "mongoose";

// Define User Schema 
const userSchema = new mongoose.Schema(
    {
        username : { 
            type: String, 
            unique: true, 
            required: true
        },
        createdAt : { 
            type: Date, 
            required: true
        }
    }
);

// Reference Model
const User = mongoose.model("User", userSchema);

export default User;