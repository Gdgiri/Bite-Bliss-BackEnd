import express from "express";
import {
  LoginUser,
  Register,
  userDetail,
} from "../Controllers/authController.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", LoginUser);
router.get("/getdata/:id", userDetail);
export default router;
