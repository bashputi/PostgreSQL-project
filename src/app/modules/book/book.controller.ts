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
});

const getAllBook = catchAsync(async (req: Request, res: Response) => {
   const result = await BookService.getAllBookFromDB();

   sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Books retrieved successfully",
    data: result,
   })
});

const getABook = catchAsync(async (req: Request, res: Response) => {
   const { bookId } = req.params;
   const result = await BookService.getBookFromDB(bookId);

   sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Book retrieved successfully",
    data: result,
   })
});

const updateABook = catchAsync(async (req: Request, res: Response) => {
   const { bookId } = req.params;
   const result = await BookService.updateBookDB(bookId, req.body);

   sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Books updated successfully",
    data: result,
   })
});

const deleteABook = catchAsync(async (req: Request, res: Response) => {
   const { bookId } = req.params;
      await BookService.deleteBookDB(bookId);

   sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Books successfully deleted",
    data: null,
   })
})


export const bookController = {
    createBook,
    getAllBook,
    getABook,
    updateABook,
    deleteABook
}