import mongoose, { mongo } from 'mongoose';

const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true
    },

    productsData: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            }
        }
    ]
})

const cartModel = mongoose.models.Cart || mongoose.model('Cart', cartSchema);