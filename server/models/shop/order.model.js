const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    unitPriceHT: {
        type: Number,
        required: true
    },
    totalHT: {
        type: Number,
        required: true
    },
    VATRate: {
        type: Number,
        required: true,
        default: 0
    },
    VATAmount: {
        type: Number,
        required: true
    },
    unitPriceTTC: {
        type: Number,
        required: true
    },
    totalTTC: {
        type: Number,
        required: true
    },
    variant: {
        name: String,
        option: String
    }
});

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    items: [OrderItemSchema],
    status: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered'],
        default: 'pending'
    },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
        required: true
    },
    billingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    totalHT: {
        type: Number,
        required: true
    },
    totalVAT: {
        type: Number,
        required: true
    },
    totalTTC: {
        type: Number,
        required: true
    },
    discountAmount: {
        type: Number,
        default: 0
    },
    totalAfterDiscount: {
        type: Number
    },
}, {
    timestamps: true
});

const OrderModel = mongoose.model('Order', OrderSchema);

module.exports = OrderModel;