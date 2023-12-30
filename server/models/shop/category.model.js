const Mongooose = require('mongoose');

const CategorySchema = new Mongooose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
        validate: {
            validator: function (str) {
                return /^[A-Z][a-zA-Z0-9]*$/.test(str);
            },
            message: props => `${props.value} n'est pas un nom de catégorie valide. Le nom doit commencer par une lettre majuscule et contenir uniquement des lettres et des chiffres.`
        },
        parent: {
            type: Mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        }
    },
}, {
    timestamps: true
});

const CategoryModel = Mongooose.model('Category', CategorySchema);

module.exports = CategoryModel;