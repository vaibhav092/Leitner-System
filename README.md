# Flashcard API

This API allows users to create, update, delete, and retrieve flashcards, implementing a spaced repetition system.
# Backend
----
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

# Frontend
-----

A spaced repetition flashcard application built with React and Tailwind CSS. This frontend implements the Leitner System, which categorizes flashcards into different "boxes" based on user retention.

## Features

* **Leitner System Implementation** - Flashcards move through five boxes based on user accuracy
* **Answer Checking** - Users can input answers and receive immediate feedback
* **Box Navigation** - Easy switching between flashcard difficulty levels
* **Add Flashcards** - Simple form for creating new flashcards
* **Organized Code Structure** - Modular and well-structured components
* **Clean UI** - Minimal distractions focused on learning

## Project Structure

```
📂 src
├── 📂 components
│   ├── BoxNavigation.jsx       # Handles box selection UI
│   ├── AddFlashcardForm.jsx    # Form for adding new flashcards
│   ├── Flashcard.jsx          # Individual flashcard display
│   └── LeitnerFlashcards.jsx  # Main Leitner system logic
├── 📂 pages
│   └── Home.jsx               # Main homepage with navigation
├── api.js                     # API calls to backend
├── App.js                     # React entry point
├── index.js                   # Application renderer
└── styles.css                 # Tailwind styling
```

## Key Changes & Improvements

### Component Refactoring

* Split components into separate files:
  * `BoxNavigation.jsx` for box selection
  * `AddFlashcardForm.jsx` for flashcard creation
  * `Flashcard.jsx` for individual card display
  * `LeitnerFlashcards.jsx` for system management
  * `Home.jsx` for improved page structure

### Answer Checking Functionality

* Type-in answer field with immediate feedback
* Retry option available
* Correct answer display after submission

### Enhanced Component Organization

* Individual component state management
* Clear prop passing between components
* Separated UI logic and data fetching

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/leitner-flashcards.git
cd leitner-flashcards
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up API Proxy

Add to package.json for local development:

```json
{
  "proxy": "http://localhost:3000"
}
```

### 4. Run the Application

```bash
npm run dev
```

Access the frontend at:
* Vite: http://localhost:5173/
* CRA: http://localhost:3000/

## API Integration

| Route | Method | Description |
|-------|--------|-------------|
| `/api/flashcards` | GET | Fetch all flashcards |
| `/api/flashcards/due` | GET | Fetch due flashcards |
| `/api/flashcards` | POST | Add new flashcard |
| `/api/flashcards/:id` | PUT | Update flashcard |
| `/api/flashcards/:id` | DELETE | Remove flashcard |

## Component Details

### LeitnerFlashcards.jsx
* Manages flashcard loading and box movement
* Handles API interactions
* Organizes review interface

### Flashcard.jsx
* Single flashcard display
* Answer submission and feedback

### BoxNavigation.jsx
* Navigation between five Leitner boxes

### AddFlashcardForm.jsx
* New flashcard creation interface

### Home.jsx
* Main page layout and styling

## Future Improvements

* User authentication implementation
* "Mastered" flashcard marking
* Transition animations
* Enhanced statistics and analytics
---
For any issues or contributions, feel free to submit a PR or open an issue!

