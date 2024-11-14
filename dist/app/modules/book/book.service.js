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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const client_1 = require("@prisma/client");
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const prisma = new client_1.PrismaClient;
const insertIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, genre, publishedYear, totalCopies, availableCopies } = payload;
    const newBook = yield prisma.book.create({
        data: { title, genre, publishedYear, totalCopies, availableCopies }
    });
    return newBook;
});
const getAllBookFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const getBook = yield prisma.book.findMany();
    if (!getBook) {
        throw new ApiError_1.default(500, "No available copies");
    }
    return getBook;
});
const getBookFromDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const getABook = yield prisma.book.findUnique({
        where: {
            bookId
        }
    });
    if (!getABook) {
        throw new ApiError_1.default(400, "Invalid book ID");
    }
    return getABook;
});
const updateBookDB = (bookId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updateABook = yield prisma.book.update({
        where: {
            bookId
        },
        data: payload
    });
    if (!updateABook) {
        throw new ApiError_1.default(400, "Invalid book ID");
    }
    return updateABook;
});
const deleteBookDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteABook = yield prisma.book.delete({
        where: {
            bookId
        }
    });
    if (!deleteABook) {
        throw new ApiError_1.default(400, "Invalid book ID");
    }
    return deleteABook;
});
exports.BookService = {
    insertIntoDB,
    getAllBookFromDB,
    getBookFromDB,
    updateBookDB,
    deleteBookDB
};
