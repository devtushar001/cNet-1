import shopCategoryModel from "../Models/shopCategoryModel.js";

export const createShopCategoryController = async (req, res) => {

    try {
        const { shopCategoryName,
            shopCategoryImage } = req.body;

        if (!shopCategoryName || !shopCategoryImage) {
            return res.status(404).json({
                success: false,
                message: `All Fields Are Required`
            })
        }

        const createCategory = shopCategoryModel.create({
            shopCategoryName,
            shopCategoryImage
        })

        if (!createCategory) {
            return res.status(500).json({
                success: false,
                message: `Category not created`
            })
        }

        return res.status(200).json({
            success: true,
            message: `Saved success fully`
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Api error ${error.message}`
        })
    }
}

export const getShopCategoryController = async (req, res) => {
    console.log("hello");
    try {
        const shopCategories = await shopCategoryModel.find();

        if (!shopCategories || shopCategories.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Categories not found",
            });
        }

        console.log(shopCategories);

        return res.status(200).json({
            success: true,
            message: "All categories fetched",
            shopCategories,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `API error: ${error.message}`,
        });
    }
};
