import axios from "axios";

const API_URL = "/api/flashcards";

export const fetchDueFlashcards = async () => {
    const response = await axios.get(`${API_URL}/due`);
    return response.data;
};

export const fetchAllFlashcards = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching flashcards:", error.response?.data || error.message);
        throw error;
    }
};

export const addFlashcard = async (question, answer) => {
    try {
        const response = await axios.post(API_URL, { question, answer });
        return response.data;
    } catch (error) {
        console.error("Error adding flashcard:", error.response?.data || error.message);
        throw error;
    }
};

export const updateFlashcardStatus = async (id, isCorrect) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, { isCorrect });
        return response.data;
    } catch (error) {
        console.error("Error updating flashcard:", error.response?.data || error.message);
        throw error;
    }
};

export const deleteFlashcard = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        return { message: "Flashcard deleted successfully" };
    } catch (error) {
        console.error("Error deleting flashcard:", error.response?.data || error.message);
        throw error;
    }
};
