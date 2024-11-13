
import { PrismaClient } from "@prisma/client";
import { IBook } from "./book.interface";

const prisma = new PrismaClient

const insertIntoDB = async (payload: IBook) => {
    const { title, genre, publishedYear, totalCopies, availableCopies } = payload;

    const newBook = await prisma.book.create({
        data: { title, genre, publishedYear, totalCopies, availableCopies }
    })
return newBook;
}

export const BookService = {
    insertIntoDB,

}