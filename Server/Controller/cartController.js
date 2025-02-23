import userModel from "../Models/userModel.js";
const addToCart = async (req, res) => {
    try {
        const { productId } = req.body;
        const userId = req.user._id;

        console.log(productId);
        console.log(userId);

        if (!itemId) {
            return res.status(400).json({
                success: false,
                message: "Item ID is required",
            });
        }

        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        let cartData = userData.cartData || {};

        cartData[itemId] = (cartData[itemId] || 0) + 1;

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
        return res.status(500).json({
            success: false,
            message: "An error occurred while adding the product to the cart",
        });
    }
};

const removeFromCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const { itemId } = req.body;

        if (!itemId) {
            return res.status(400).json({
                success: false,
                message: "Item ID is required",
            });
        }

        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        let cartData = userData.cartData || {};

        if (!cartData[itemId]) {
            return res.status(400).json({
                success: false,
                message: "Item not found in cart",
            });
        }

        if (cartData[itemId] > 1) {
            cartData[itemId] -= 1;
        } else {
            delete cartData[itemId];
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
        return res.status(500).json({
            success: false,
            message: "An error occurred while removing the product from the cart",
        });
    }
};



const getCart = async (req, res) => {
    try {
        const userId = req.user.id;
        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "Invalid user"
            });
        }
        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.status(404).json({
                success: false,
                message: "User not found in the database"
            });
        }

        const cartData = userData.cartData || {};

        return res.status(200).json({
            success: true,
            message: "Cart data fetched successfully",
            cartData,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};


export { addToCart, removeFromCart, getCart }