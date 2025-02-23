import {Router} from "express"
import { addFlashcard, deleteFlashcard, getAllFlashcard, getDueFlashcard, updateFlashcard } from "../controllers/flashcard.js"

const router=Router()

router.route("/flashcards")
    .get(getAllFlashcard)
    .post(addFlashcard);

router.route("/flashcards/:id")
    .put(updateFlashcard)
    .delete(deleteFlashcard);

router.route('/flashcards/update').get(getDueFlashcard)
export default router