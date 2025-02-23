import { FlashCard } from "../model/Flashcard.model.js";

const addFlashcard = async (req, res) => {
    try {
        let { question, answer, box } = req.body;

        if (!question || !answer) {
            return res.status(400).json({ message: "Question and answer are required" });
        }

        question = question.toLowerCase().trim();
        answer = answer.toLowerCase().trim();

        const existingCard = await FlashCard.findOne({ 
            $or: [{ question }, { answer }] 
        });

        if (existingCard) {
            return res.status(400).json({ message: "Flashcard already exists" });
        }

        const newFlashcard = await FlashCard.create({
            question,
            answer,
            box: Number(box) || 1
        });

        return res.status(201).json({ message: "FlashCard Added", flashcard: newFlashcard });
    } catch (error) {
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
};

const getAllFlashcard = async (req, res) => {
    try {
        const data = await FlashCard.find({});
        
        if (data.length === 0) {
            return res.status(404).json({ message: "No flashcards exist" });
        }

        return res.status(200).json({ flashcards: data });
    } catch (error) {
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
};

const updateFlashcard = async (req, res) => {
    try {
        const { id } = req.params;
        const { isCorrect } = req.body;

        if (typeof isCorrect !== "boolean") {
            return res.status(400).json({ message: "isCorrect must be a boolean (true/false)" });
        }

        const card = await FlashCard.findById(id);
        if (!card) {
            return res.status(404).json({ message: "No card found with this ID" });
        }

        if (isCorrect) {
            card.box = Math.min(card.box + 1, 5); 
        } else {
            card.box = 1;
        }
        await card.save();

        return res.status(200).json({ message: "Flashcard updated", flashcard: card });
    } catch (error) {
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
};

const deleteFlashcard = async (req, res) => {
    try {
        const { id } = req.params;

        const card = await FlashCard.findById(id);
        if (!card) {
            return res.status(404).json({ message: "No card found with this ID" });
        }

        await FlashCard.deleteOne({ _id: id });

        return res.status(200).json({ message: "Flashcard deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
};

const getDueFlashcard = async (req, res) => {
    try {
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);

        const dueFlashcards = await FlashCard.find({
            nextReview: { $lte: currentDate }
        }).sort({ nextReview: 1 }); 
        if (dueFlashcards.length === 0) {
            return res.status(404).json({ message: "No flashcards due for review" });
        }

        return res.status(200).json({ dueFlashcards });
    } catch (error) {
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
};

export { addFlashcard, getAllFlashcard, updateFlashcard, deleteFlashcard,getDueFlashcard };
