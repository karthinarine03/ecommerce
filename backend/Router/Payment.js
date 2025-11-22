import express from 'express';
import { checkoutStrip } from '../Controller/PaymentController.js';

const router=express.Router();

router.post('/placeOrder/payment', checkoutStrip)

export default router;