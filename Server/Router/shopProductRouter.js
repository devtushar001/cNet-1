import express from 'express';
import { addShopProductController } from '../Controller/shopProductController.js';

const shopProductRouter = express.Router();

shopProductRouter.post('/add', addShopProductController);

export default shopProductRouter;