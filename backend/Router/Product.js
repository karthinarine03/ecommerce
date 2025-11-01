import express from 'express';
import { addReview, getAllProduct, getProduct } from '../Controller/ProductController.js';


const router=express.Router();

router.get('/allProducts',getAllProduct)
router.get('/product/:id',getProduct)
router.route('/product/review/add').post(addReview)

export default router;