import express from 'express';
import { isAuth } from '../MiddleWares/isAuth.js';
import { addToCart, getCart, removeFromCart } from '../Controller/cartController.js';


const cartRouter = express.Router();

cartRouter.post('/add', isAuth, addToCart );
cartRouter.post('/remove', isAuth, removeFromCart);
cartRouter.get('/get', isAuth, getCart);

export default cartRouter;