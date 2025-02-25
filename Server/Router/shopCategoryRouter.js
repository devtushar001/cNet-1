import express from 'express';
import { createShopCategoryController, getShopCategoryController } from '../Controller/shopCategoryController.js';

const shopCategoryRouter = express.Router();

shopCategoryRouter.post('/create', createShopCategoryController);
shopCategoryRouter.get('/get-all', getShopCategoryController);


export default shopCategoryRouter;