import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BorrowService } from "./borrow.service";


const createBorrow = catchAsync(async (req: Request, res: Response) => {
   const result = await BorrowService.insertIntoDB(req.body);

   sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Book borrowed successfully",
    data: result,
   })
});

const getABorrow = catchAsync(async (req: Request, res: Response) => {
   const result = await BorrowService.getBorrowFromDB(req.body);

   sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Book returned successfully",
    data: result,
   })
});

const overDueBook = catchAsync(async (req: Request, res: Response) => {
   const result = await BorrowService.overDueFromDB();

   if (result?.length === 0) {
      sendResponse(res, {
         success: true,
         statusCode: 200,
         message: "No overdue books",
         data: result,
        })
   }

   sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Overdue borrow list fetched",
    data: result,
   })
});

export const BorrowController = {
    createBorrow,
    getABorrow,
    overDueBook
}