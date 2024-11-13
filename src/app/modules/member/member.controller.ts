import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { memberService } from "./member.service";




const createMember = catchAsync(async (req: Request, res: Response) => {
   const result = await memberService.insertIntoDB(req.body);

   sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Member created successfully",
    data: result,
   })
});

const getAllMember = catchAsync(async (req: Request, res: Response) => {
   const result = await memberService.getAllMemberFromDB();

   sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Members retrieved successfully",
    data: result,
   })
});

const getAMember = catchAsync(async (req: Request, res: Response) => {
   const { memberId } = req.params;
   const result = await memberService.getMemberFromDB(memberId);

   sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Members retrieved successfully",
    data: result,
   })
});

const updateAMember = catchAsync(async (req: Request, res: Response) => {
   const { memberId } = req.params;
   const result = await memberService.updateMemberDB(memberId, req.body);

   sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Member updated successfully",
    data: result,
   })
});

const deleteAMember = catchAsync(async (req: Request, res: Response) => {
   const { memberId } = req.params;
     await memberService.deleteMemberDB(memberId);

   sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Member successfully deleted",
    data: null,
   })
})


export const memberController = {
    createMember,
    getAllMember,
    getAMember,
    updateAMember,
    deleteAMember
}