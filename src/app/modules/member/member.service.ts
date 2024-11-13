
import { PrismaClient } from "@prisma/client";
import { IMember } from "./member.interface";


const prisma = new PrismaClient

const insertIntoDB = async (payload: IMember) => {
    const { name, email, phone, membershipDate } = payload;

    const newMember = await prisma.member.create({
        data: { name, email, phone, membershipDate }
    })

    return newMember;
};

const getAllMemberFromDB = async () => {
    const getMember = await prisma.member.findMany()
    return getMember;
};

const getMemberFromDB = async (memberId: string) => {
    const getAMember = await prisma.member.findUnique({
        where: {
            memberId
        } 
    })
    return getAMember;
};

const updateMemberDB = async (memberId: string, payload: IMember) => {
    const updateAMember = await prisma.member.update({
        where: {
            memberId
        },
        data: payload 
    })
    return updateAMember;
};

const deleteMemberDB = async (memberId: string) => {
    const deleteAMember = await prisma.member.delete({
        where: {
            memberId
        }
    })
    return deleteAMember;
};


export const memberService = {
    insertIntoDB,
    getAllMemberFromDB,
    getMemberFromDB,
    updateMemberDB,
    deleteMemberDB
}