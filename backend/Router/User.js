import express from 'express';
import {
  forgotpassword,
  getuserprofile,
  login,
  logout,
  register,
  resetpassword,
  updateuserprofile,
  uploadavatar
} from '../Controller/UserController.js';
import { isauthenticated } from '../Middlewares/auth.js';
import { upload } from '../Middlewares/multer.js';

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpassword/:token").post(resetpassword);
router.route("/me").get(isauthenticated, getuserprofile);
router.route("/updateme").put(isauthenticated, updateuserprofile);

// ✅ Add multer middleware for file upload
router.route("/uploadavatar").put(isauthenticated, upload.single("file"), uploadavatar);

export default router;
