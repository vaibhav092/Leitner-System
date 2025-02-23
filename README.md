# Flashcard API

This API allows users to create, update, delete, and retrieve flashcards, implementing a spaced repetition system.
## Backend
## Base URL
```
http://localhost:3000/api
```

## Endpoints

### 1. Get All Flashcards
**Endpoint:**
```
GET /flashcards
```
**Description:**
Retrieves all flashcards.

**Response:**
```json
{
    "data": [
        {
            "_id": "65d2f8a12a3b4c00123abcd",
            "question": "What is Node.js?",
            "answer": "A JavaScript runtime",
            "box": 2
        }
    ]
}
```

---
### 2. Add a Flashcard
**Endpoint:**
```
POST /flashcards
```
**Description:**
Adds a new flashcard.

**Request Body:**
```json
{
    "question": "What is MongoDB?",
    "answer": "A NoSQL database",
}
```

**Response:**
```json
{
    "message": "FlashCard Added",
    "flashcard": {
        "_id": "65d2f8a12a3b4c00123efgh",
        "question": "What is MongoDB?",
        "answer": "A NoSQL database",
        "box": 1
    }
}
```

---
### 3. Update a Flashcard
**Endpoint:**
```
PUT /flashcards/:id
```
**Description:**
Updates a flashcard's spaced repetition box based on whether the answer was correct.

**Request Body:**
```json
{
    "isCorrect": true
}
```

**Response:**
```json
{
    "message": "Flashcard updated",
    "flashcard": {
        "_id": "65d2f8a12a3b4c00123abcd",
        "question": "What is Node.js?",
        "answer": "A JavaScript runtime",
        "box": 3
    }
}
```

---
### 4. Delete a Flashcard
**Endpoint:**
```
DELETE /flashcards/:id
```
**Description:**
Deletes a flashcard.

**Response:**
```json
{
    "message": "Flashcard deleted successfully"
}
```

---
### 5. Get Flashcards Due for Review
**Endpoint:**
```
GET /flashcards/update
```
**Description:**
Retrieves flashcards that are due for review based on the spaced repetition system.

**Response:**
```json
{
    "data": [
        {
            "_id": "65d2f8a12a3b4c00123ijkl",
            "question": "What is Express.js?",
            "answer": "A web framework for Node.js",
            "box": 2
        }
    ]
}
```

---
## Setup Instructions

1. Clone the repository:
   ```sh
   git clone <repo_url>
   cd <project_folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add:
   ```
   PORT=3000
   MONGODB_URL=<your_mongo_db_url>
   ```
4. Start the server:
   ```sh
   npm start
   ```
5. The server runs on `http://localhost:3000/api` by default.

## Technologies Used
- **Node.js**: Backend runtime
- **Express.js**: Web framework
- **MongoDB & Mongoose**: Database & ODM

---
For any issues or contributions, feel free to submit a PR or open an issue!

