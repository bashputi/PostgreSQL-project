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
exports.memberService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient;
const insertIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, phone, membershipDate } = payload;
    const newMember = yield prisma.member.create({
        data: { name, email, phone, membershipDate }
    });
    return newMember;
});
const getAllMemberFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const getMember = yield prisma.member.findMany();
    return getMember;
});
const getMemberFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const getAMember = yield prisma.member.findUnique({
        where: {
            memberId
        }
    });
    return getAMember;
});
const updateMemberDB = (memberId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updateAMember = yield prisma.member.update({
        where: {
            memberId
        },
        data: payload
    });
    return updateAMember;
});
const deleteMemberDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteAMember = yield prisma.member.delete({
        where: {
            memberId
        }
    });
    return deleteAMember;
});
exports.memberService = {
    insertIntoDB,
    getAllMemberFromDB,
    getMemberFromDB,
    updateMemberDB,
    deleteMemberDB
};
