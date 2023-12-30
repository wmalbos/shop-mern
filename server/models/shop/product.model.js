const Mongoose = require('mongoose');

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
            validator: function(str) {
                return /^[A-Z][a-zA-Z0-9]*$/.test(str);
            },
            message: props => `${props.value} n'est pas un nom de produit valide. Le nom doit commencer par une lettre majuscule et contenir uniquement des lettres et des chiffres.`
        },
    },
}, {
    timestamps: true
});

const ProductModel = Mongoose.model('Product', ProductSchema);

module.exports = ProductModel;