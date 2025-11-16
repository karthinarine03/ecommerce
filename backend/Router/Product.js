import express from 'express';
import { addReview, getAllProduct, getProduct } from '../Controller/ProductController.js';
import { isauthenticated } from '../Middlewares/auth.js';


const router=express.Router();

router.get('/allProducts',isauthenticated,getAllProduct)
router.get('/product/:id',getProduct)
router.route('/product/review/add').post(isauthenticated,addReview)

export default router;