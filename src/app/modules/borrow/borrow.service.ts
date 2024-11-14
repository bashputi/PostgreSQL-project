import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;


interface IBorrow {
    bookId: string,
    memberId: string
}

const insertIntoDB = async (payload: IBorrow) => {
    const { bookId, memberId } = payload;

    const newBook = await prisma.borrowRecord.create({
        data: { 
            bookId, 
            memberId,
            borrowDate: new Date(), 
        }
    })

    return newBook;
};

const getBorrowFromDB = async (payload: any) => {
    const { borrowId } = payload;
    if (!borrowId) {
        throw new Error("Invalid or missing borrowId.");
    }
    const getABook = await prisma.borrowRecord.findUnique({
        where: {
            borrowId
        } 
    })
    return getABook;
};

const FOURTEEN_DAYS = 14 * 24 * 60 * 60 * 1000;
const overDueFromDB = async () => {
    const currentDate = new Date();

    const overdueRecords = await prisma.borrowRecord.findMany({
        where: {
            returnDate: null,
            borrowDate: {
                lt: new Date(currentDate.getTime() - FOURTEEN_DAYS),
            },
        },
        select: {
            borrowId: true,
            Book: { select: { title: true }},
            Member: { select: { name: true }},
            borrowDate: true
        },
    });

  
const overdueData = overdueRecords.map((record) => {
    const overdueDays = Math.floor((currentDate.getTime() - record.borrowDate.getTime()) / (24*60*60*1000)) - 14;
    return {
        borrowId: record.borrowId,
        bookTitle: record.Book.title,
        borrowerName: record.Member.name,
        overdueDays
    };
});
return overdueData;

};

export const BorrowService = {
    insertIntoDB,
    getBorrowFromDB,
    overDueFromDB
}