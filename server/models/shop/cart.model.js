const Mongooose = require('mongoose');

const CartItemSchema = new Mongoose.Schema({
    product: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    variant: {
        name: String,
        option: String
    }
});

const CartSchema = new Mongooose.Schema({
    user: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    items: [CartItemSchema]
}, { timestamps: true });

const CartModel = Mongooose.model('Cart', CartSchema);

module.exports = CartModel;