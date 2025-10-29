import express from 'express';
import { getUser } from '../Controller/UserController.js';

const router=express.Router();

router.route("/").get(getUser);

export default router;