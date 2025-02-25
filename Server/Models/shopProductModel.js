import mongoose from "mongoose";

const shopProductSchema = new mongoose.Schema({
    featuredImg: { type: String, required: true },
    galleryImg: {
        type: Array,
        default: []
    },
    title: {
        type: String,
        required: true
    },
    shopCategory: { type: String, required: true },
    brand: { type: String, required: true },
    stock: { type: Number, required: true },
    price: { type: Number, required: true, default: 299.99 },
    description: { type: String, required: true },
    content: { type: String, required: true }
}, { timestamps: true });

const shopProductModel = mongoose.models.shopProduct || mongoose.model("shopProduct", shopProductSchema);
export default shopProductModel;
