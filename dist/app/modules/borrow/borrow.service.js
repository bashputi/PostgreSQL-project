"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient;
const insertIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId, memberId } = payload;
    const newBook = yield prisma.borrowRecord.create({
        data: {
            bookId,
            memberId,
            borrowDate: new Date(),
        }
    });
    return newBook;
});
const getBorrowFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { borrowId } = payload;
    if (!borrowId) {
        throw new Error("Invalid or missing borrowId.");
    }
    const getABook = yield prisma.borrowRecord.findUnique({
        where: {
            borrowId
        }
    });
    return getABook;
});
const FOURTEEN_DAYS = 14 * 24 * 60 * 60 * 1000;
const overDueFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentDate = new Date();
    const overdueRecords = yield prisma.borrowRecord.findMany({
        where: {
            returnDate: null,
            borrowDate: {
                lt: new Date(currentDate.getTime() - FOURTEEN_DAYS),
            },
        },
        select: {
            borrowId: true,
            Book: { select: { title: true } },
            Member: { select: { name: true } },
            borrowDate: true
        },
    });
    const overdueData = overdueRecords.map((record) => {
        const overdueDays = Math.floor((currentDate.getTime() - record.borrowDate.getTime()) / (24 * 60 * 60 * 1000)) - 14;
        return {
            borrowId: record.borrowId,
            bookTitle: record.Book.title,
            borrowerName: record.Member.name,
            overdueDays
        };
    });
    return overdueData;
});
exports.BorrowService = {
    insertIntoDB,
    getBorrowFromDB,
    overDueFromDB
};
