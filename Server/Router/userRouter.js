import express from 'express';
import { isAuth } from '../MiddleWares/AutheMiddleware.js';
import { loginController, logoutController, registerController } from '../Controller/userController.js';

const userRouter = express.Router()

userRouter.post('/register', registerController);
userRouter.post('/login', loginController);
userRouter.get('/logout', isAuth, logoutController)
export default userRouter;