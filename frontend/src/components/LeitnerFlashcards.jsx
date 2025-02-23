import React, { useEffect, useState } from "react";
import { fetchAllFlashcards, updateFlashcardStatus, addFlashcard } from "../api/api.js";
import BoxNavigation from "./BoxNavigation";
import AddFlashcardForm from "./AddFlashcardForm";
import Flashcard from "./Flashcard";

const LeitnerFlashcards = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [currentBox, setCurrentBox] = useState(1);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        loadFlashcards();
    }, []);

    const loadFlashcards = async () => {
        try {
            const data = await fetchAllFlashcards();
            if (data && Array.isArray(data.flashcards)) {
                setFlashcards(data.flashcards);
            } else {
                console.error("Invalid data format received:", data);
                setFlashcards([]);
            }
        } catch (error) {
            console.error("Error loading flashcards:", error);
            setFlashcards([]);
        }
    };

    const handleAnswer = async (id, isCorrect) => {
        try {
            await updateFlashcardStatus(id, isCorrect);
            loadFlashcards();
        } catch (error) {
            console.error("Error updating flashcard:", error);
        }
    };

    const getFlashcardsByBox = (box) => {
        return Array.isArray(flashcards) ? flashcards.filter((card) => card.box === box) : [];
    };

    const handleAddFlashcard = async (flashcardData) => {
        try {
            await addFlashcard(flashcardData.question, flashcardData.answer);
            setShowForm(false);
            loadFlashcards();
        } catch (error) {
            console.error("Error adding flashcard:", error);
        }
    };

    return (
        <div className="p-6 bg-gradient-to-b from-blue-50 to-white min-h-screen">
            <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">Leitner Flashcards System</h1>

            <BoxNavigation 
                currentBox={currentBox}
                setCurrentBox={setCurrentBox}
                getFlashcardsByBox={getFlashcardsByBox}
            />

            <div className="flex justify-center mb-6">
                <button
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200"
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? "Cancel" : "Add New Flashcard"}
                </button>
            </div>

            {showForm && (
                <AddFlashcardForm 
                    onSubmit={handleAddFlashcard}
                    onCancel={() => setShowForm(false)}
                />
            )}

            <div className="max-w-lg mx-auto space-y-4">
                {getFlashcardsByBox(currentBox).length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-500 text-lg">No flashcards in this box yet.</p>
                        <p className="text-blue-500 text-sm mt-2">Add some flashcards to get started!</p>
                    </div>
                ) : (
                    getFlashcardsByBox(currentBox).map((card) => (
                        <Flashcard 
                            key={card._id}
                            card={card}
                            onAnswer={handleAnswer}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default LeitnerFlashcards;