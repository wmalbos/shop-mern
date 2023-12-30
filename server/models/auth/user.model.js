const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        trim: true
    },
    role: {
        type: String,
        enum: ['admin', 'customer'],
        default: 'customer'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);