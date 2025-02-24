import mongoose from 'mongoose';

const shopCategorySchema = new mongoose.Schema({
    shopCategoryName: {
        type: String,
        required: true,
        trim: true
    },
    shopCategoryImage: {
        type: String,
        required: true
    }
}, { timestamps: true }); 

const shopCategoryModel = mongoose.models.shopCategory || mongoose.model("shopCategory", shopCategorySchema);
export default shopCategoryModel;
