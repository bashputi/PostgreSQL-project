import express from 'express';
import { bookController } from './book.controller';


const router = express.Router();

router.post("/", bookController.createBook);
router.get("/", bookController.getAllBook);
router.get("/:bookId", bookController.getABook);
router.put("/:bookId", bookController.updateABook);
router.delete("/:bookId", bookController.deleteABook);

export const bookRoutes = router;
