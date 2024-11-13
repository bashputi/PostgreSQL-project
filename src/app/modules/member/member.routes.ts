import express from 'express';
import { memberController } from './member.controller';


const router = express.Router();

router.post("/", memberController.createMember);
router.get("/", memberController.getAllMember);
router.get("/:memberId", memberController.getAMember);
router.put("/:memberId", memberController.updateAMember);
router.delete("/:memberId", memberController.deleteAMember);

export const memberRoutes = router;
