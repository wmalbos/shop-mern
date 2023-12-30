const Mongoose = require('mongoose');

const VariantSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    priceHT: {
        type: Number,
        required: true
    },
    options: [{
        type: String
    }],
});

const ProductSchema = new Mongoose.Schema({
    SKU: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
        validate: {
            validator: function (str) {
                return /^[A-Z][a-zA-Z0-9]*$/.test(str);
            },
            message: props => `${props.value} n'est pas un nom de produit valide. Le nom doit commencer par une lettre majuscule et contenir uniquement des lettres et des chiffres.`
        },
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    priceHT: {
        type: Number,
        required: true
    },
    VATRate: {
        type: Number,
        default: 0
    },
    quantityInStock: {
        type: Number,
        required: true,
        default: 0
    },
    images: [{
        type: String
    }],
    variants: [VariantSchema]
}, {
    timestamps: true
});

const ProductModel = Mongoose.model('Product', ProductSchema);

module.exports = ProductModel;