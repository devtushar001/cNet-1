import JWT from 'jsonwebtoken';
import userModel from '../Models/userModel.js';
export const isAuth = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(500).send({
            success: false,
            message: "User Not Authenticated"
        })
    }

    const decodeData = JWT.verify(token, process.env.JWT_SECRET);
    req.user = await userModel.findById(decodeData._id);
   
    next();
}