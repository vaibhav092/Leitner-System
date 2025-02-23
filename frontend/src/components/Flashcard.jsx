import React, { useState } from "react";

const Flashcard = ({ card, onAnswer }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [userAnswer, setUserAnswer] = useState("");
    const [isAnswered, setIsAnswered] = useState(false);

    const handleCheckAnswer = () => {
        const isCorrect = userAnswer.toLowerCase().trim() === card.answer.toLowerCase().trim();
        setIsAnswered(true);
        setShowAnswer(true);
        onAnswer(card._id, isCorrect);
    };

    const handleTryAgain = () => {
        setShowAnswer(false);
        setUserAnswer("");
        setIsAnswered(false);
    };

    return (
        <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-md hover:shadow-lg transition-shadow duration-200">
            <p className="text-lg font-medium text-blue-900 mb-4">{card.question}</p>
            
            {!isAnswered ? (
                <div className="space-y-4">
                    <input
                        type="text"
                        className="w-full p-3 border-2 border-blue-100 rounded-lg focus:border-blue-400 focus:outline-none"
                        placeholder="Type your answer..."
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                    />
                    <button
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        onClick={handleCheckAnswer}
                        disabled={!userAnswer.trim()}
                    >
                        Check Answer
                    </button>
                </div>
            ) : (
                <div className="space-y-4">
                    <div className={`p-4 rounded-lg ${showAnswer ? 'bg-blue-50' : ''}`}>
                        <p className="font-medium">Correct Answer: {card.answer}</p>
                        <p className="mt-2">Your Answer: {userAnswer}</p>
                    </div>
                    <button
                        className="w-full px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                        onClick={handleTryAgain}
                    >
                        Try Again
                    </button>
                </div>
            )}
        </div>
    );
};

export default Flashcard;