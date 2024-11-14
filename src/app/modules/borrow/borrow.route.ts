import express from 'express';
import { BorrowController } from './borrow.controller';



const router = express.Router();

router.post("/borrow", BorrowController.createBorrow);
router.get("/return", BorrowController.getABorrow);
router.get("/borrow/overdue", BorrowController.overDueBook);


export const borrowRoutes = router;
