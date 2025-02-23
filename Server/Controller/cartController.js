import userModel from "../Models/userModel.js";
import mongoose from "mongoose";

const addToCart = async (req, res) => {
    try {
        const { productId } = req.body;
        const userId = req.user._id;

        if (!productId) {
            return res.status(400).json({
                success: false,
                message: "Product ID is required",
            });
        }


        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        let cartData = userData.cartData || [];

        const productIndex = cartData.findIndex(item => item.productId.toString() === String(productId));

        if (productIndex !== -1) {
            cartData[productIndex].quantity += 1;
        } else {
            cartData.push({ productId, quantity: 1 });
        }

        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { $set: { cartData } },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(500).json({
                success: false,
                message: "Failed to update cart",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Product added to cart successfully",
            cart: updatedUser.cartData,
        });
    } catch (error) {
        console.error("Error in addToCart:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while adding the product to the cart",
        });
    }
};


const removeFromCart = async (req, res) => {
    try {
        const userId = req.user._id;
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).json({
                success: false,
                message: "Product ID is required",
            });
        }

        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        let cartData = userData.cartData || [];

        const productIndex = cartData.findIndex(item => item.productId.toString() === String(productId));

        if (productIndex === -1) {
            return res.status(400).json({
                success: false,
                message: "Product not found in cart",
            });
        }

        if (cartData[productIndex].quantity > 1) {
            cartData[productIndex].quantity -= 1;
        } else {
            cartData.splice(productIndex, 1);
        }

        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { $set: { cartData } },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(500).json({
                success: false,
                message: "Failed to update cart",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Product removed from cart successfully",
            cart: updatedUser.cartData,
        });
    } catch (error) {
        console.error("Error in removeFromCart:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while removing the product from the cart",
        });
    }
};


const getCart = async (req, res) => {
    try {
        const userId = req.user._id;

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "Invalid user",
            });
        }

        // Find the user
        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.status(404).json({
                success: false,
                message: "User not found in the database",
            });
        }

        // Ensure cartData is always an array
        const cartData = userData.cartData || [];

        return res.status(200).json({
            success: true,
            message: "Cart data fetched successfully",
            cart: cartData,
        });
    } catch (error) {
        console.error("Error in getCart:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while fetching the cart data",
            error: error.message,
        });
    }
};



export { addToCart, removeFromCart, getCart }