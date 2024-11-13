
import { PrismaClient } from "@prisma/client";
import { IBook } from "./book.interface";

const prisma = new PrismaClient

const insertIntoDB = async (payload: IBook) => {
    const { title, genre, publishedYear, totalCopies, availableCopies } = payload;

    const newBook = await prisma.book.create({
        data: { title, genre, publishedYear, totalCopies, availableCopies }
    })

    return newBook;
};

const getAllBookFromDB = async () => {
    const getBook = await prisma.book.findMany()
    return getBook;
};

const getBookFromDB = async (bookId: string) => {
    const getABook = await prisma.book.findUnique({
        where: {
            bookId
        } 
    })
    return getABook;
};

const updateBookDB = async (bookId: string, payload: IBook) => {
    const updateABook = await prisma.book.update({
        where: {
            bookId
        },
        data: payload 
    })
    return updateABook;
};

const deleteBookDB = async (bookId: string) => {
    const deleteABook = await prisma.book.delete({
        where: {
            bookId
        }
    })
    return deleteABook;
};


export const BookService = {
    insertIntoDB,
    getAllBookFromDB,
    getBookFromDB,
    updateBookDB,
    deleteBookDB
}