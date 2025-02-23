import React, { useState } from "react";

const AddFlashcardForm = ({ onSubmit, onCancel }) => {
    const [newFlashcard, setNewFlashcard] = useState({ question: "", answer: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newFlashcard.question.trim() || !newFlashcard.answer.trim()) return;
        onSubmit(newFlashcard);
        setNewFlashcard({ question: "", answer: "" });
    };

    return (
        <form 
            className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg border border-blue-100 mb-8" 
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                className="w-full p-3 mb-4 border-2 border-blue-100 rounded-lg focus:border-blue-400 focus:outline-none"
                placeholder="Enter question"
                value={newFlashcard.question}
                onChange={(e) => setNewFlashcard({ ...newFlashcard, question: e.target.value })}
                required
            />
            <input
                type="text"
                className="w-full p-3 mb-4 border-2 border-blue-100 rounded-lg focus:border-blue-400 focus:outline-none"
                placeholder="Enter answer"
                value={newFlashcard.answer}
                onChange={(e) => setNewFlashcard({ ...newFlashcard, answer: e.target.value })}
                required
            />
            <div className="flex gap-3">
                <button 
                    type="submit" 
                    className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                    Save Flashcard
                </button>
                <button 
                    type="button" 
                    onClick={onCancel}
                    className="px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default AddFlashcardForm;