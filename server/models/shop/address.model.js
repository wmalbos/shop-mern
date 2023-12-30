const Mongooose = require('mongoose');

const AddressSchema = new Mongooose.Schema({
    user: {
        type: Mongooose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    line1: {
        type: String,
        required: true
    },
    line2: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    isDefault: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const AddressModel = Mongooose.model('Address', AddressSchema);

module.exports = AddressModel;