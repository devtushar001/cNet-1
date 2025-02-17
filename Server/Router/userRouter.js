import express from 'express';
import { getUserProfile, loginController, registerController } from '../Controller/userController.js';
import { isAuth } from '../MiddleWares/isAuth.js';

const userRouter = express.Router();

userRouter.post('/register', registerController);
userRouter.post('/login', loginController);
userRouter.get('/get-user', isAuth, getUserProfile);

export default userRouter;