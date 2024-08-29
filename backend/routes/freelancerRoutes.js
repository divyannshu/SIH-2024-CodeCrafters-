import express from "express";
import { applyFreelancerController, FreelancerInfoController, updateProfileController } from "../controllers/freelancerCtrl.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

//routes
//Profile || POST
router.post("/profile", authMiddleware, applyFreelancerController);

//VIEW_Profile || GET
router.get("/view_profile", authMiddleware, FreelancerInfoController);

//Update_Profile || GET
router.post("/update_profile", authMiddleware, updateProfileController);

export { router };