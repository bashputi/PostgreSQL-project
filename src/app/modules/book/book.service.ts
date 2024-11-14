import { PrismaClient } from "@prisma/client";
import { IBook } from "./book.interface";
import ApiError from "../../errors/ApiError";

const prisma = new PrismaClient

const insertIntoDB = async (payload: IBook) => {
    const { title, genre, publishedYear, totalCopies, availableCopies } = payload;

    const newBook = await prisma.book.create({
        data: { title, genre, publishedYear, totalCopies, availableCopies }
    })

    return newBook;
};

const getAllBookFromDB = async () => {
    const getBook = await prisma.book.findMany();

    if(!getBook) {
        throw new ApiError(500, "No available copies");
    }

    return getBook;
};

const getBookFromDB = async (bookId: string) => {
    const getABook: any = await prisma.book.findUnique({
        where: {
            bookId
        } 
    });

    if(!getABook) {
        throw new ApiError(400, "Invalid book ID");
    }
    return getABook;
};

const updateBookDB = async (bookId: string, payload: IBook) => {
    const updateABook = await prisma.book.update({
        where: {
            bookId
        },
        data: payload 
    });
    if(!updateABook) {
        throw new ApiError(400, "Invalid book ID");
    }
    return updateABook;
};

const deleteBookDB = async (bookId: string) => {
    const deleteABook = await prisma.book.delete({
        where: {
            bookId
        }
    })
    if(!deleteABook) {
        throw new ApiError(400, "Invalid book ID");
    }
    return deleteABook;
};


export const BookService = {
    insertIntoDB,
    getAllBookFromDB,
    getBookFromDB,
    updateBookDB,
    deleteBookDB
}