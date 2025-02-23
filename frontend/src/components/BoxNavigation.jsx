import React from "react";

const BoxNavigation = ({ currentBox, setCurrentBox, getFlashcardsByBox }) => {
    return (
        <div className="flex justify-center my-6 gap-3">
            {[1, 2, 3, 4, 5].map((box) => (
                <button
                    key={box}
                    className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                        currentBox === box 
                        ? "bg-blue-600 text-white shadow-lg transform scale-105" 
                        : "bg-white text-blue-600 border-2 border-blue-200 hover:bg-blue-50"
                    }`}
                    onClick={() => setCurrentBox(box)}
                >
                    Box {box}
                    <span className="ml-2 px-2 py-0.5 bg-white rounded-full text-sm text-blue-600">
                        {getFlashcardsByBox(box).length}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default BoxNavigation;