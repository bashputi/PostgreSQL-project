import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BookService } from "./book.service";




const createBook = catchAsync(async (req: Request, res: Response) => {
   const result = await BookService.insertIntoDB(req.body);

   sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Book created successfully",
    data: result,
   })
})


export = {
    createBook
}