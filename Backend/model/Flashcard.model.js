import mongoose, { Schema } from "mongoose";

const flashcardSchema = new Schema(
    {
        question: { 
            type: String, required: true 
        }, 
        answer: {
            type: String, required: true 
        },
        box: {
            type: Number, default: 1, min: 1, max: 5 
        }, 
        nextReview: {
            type: Date, default: Date.now 
        }, 
    },
    {
        timestamps: true, 
    }
);

export const FlashCard = mongoose.model("Flashcard", flashcardSchema);
