const mongoose = require('mongoose');

const DiscountSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    amount: {
        type: Number,
        required: true
    },
    percentage: {
        type: Boolean,
        required: true,
        default: false
    },
    validFrom: {
        type: Date
    },
    validTo: {
        type: Date
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

const DiscountModel = mongoose.model('Discount', DiscountSchema);

module.exports = DiscountModel;