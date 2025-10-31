import express from 'express';
import { getAllProduct, getProduct } from '../Controller/ProductController.js';


const router=express.Router();

router.get('/allProducts',getAllProduct)
router.get('/product/:id',getProduct)

export default router;