const mongoose = require('mongoose');

const InvoiceItemSchema = new mongoose.Schema({
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

const InvoiceSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    items: [InvoiceItemSchema],
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
    status: {
        type: String,
        enum: ['unpaid', 'paid'],
        default: 'unpaid'
    },
    dueDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    billingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
        required: true
    },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
        required: true
    }
}, {
    timestamps: true
});

const InvoiceModel = mongoose.model('Invoice', InvoiceSchema);

module.exports = InvoiceModel;