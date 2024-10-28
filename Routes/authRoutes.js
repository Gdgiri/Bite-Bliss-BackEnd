import express from "express";
import { LoginUser, Register } from "../Controllers/authController.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", LoginUser);
export default router;
