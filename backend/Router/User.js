import express from 'express';
import { forgotpassword, login, logout, register, resetpassword } from '../Controller/UserController.js';

const router=express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpassword/:token").post(resetpassword);

export default router;