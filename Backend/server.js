import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors"
import flashRouter from "./routes/flashcard.routes.js"

const app=express()

app.use(cors())
//MiddleWare
config(); 

app.use(express.json());

app.use(express.urlencoded({ extended: true })); 


//Routes

app.use("/api",flashRouter)


const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
        dbName: "FlashCard",
        });
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log("DB connected");
            console.log(`Server running on port ${PORT}`);
    });
    } catch (error) {
        console.error("DB::ERROR", error);
        process.exit(1);
    }
};
startServer();

