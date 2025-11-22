import express from "express"
import { placeOrder } from "../Controller/OrderController.js"
const router = express.Router()

router.post('/placeOrder',placeOrder)

export default router