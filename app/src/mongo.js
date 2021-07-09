import mongoose from "mongoose";

const HOST = process.env.MONGODB_HOST || "localhost";
const DATABASE = process.env.MONGODB_DATABASE || "nodejs-todo";

export const uri = `mongodb://${HOST}:27017/${DATABASE}`;
const options = { useUnifiedTopology: true };

export const connectWithDb = () => {
    mongoose.connect(uri, options, (err, db) => {
        if (err) console.error(err);
        else console.log("Connection established with database");
    });
};
