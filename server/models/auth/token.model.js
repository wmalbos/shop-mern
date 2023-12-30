const Mongoose = require("mongoose");

const tokenSchema = new Schema({
    userId: {
        type: Mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
        expires: 60 * 60 * 24 * 3, // 3 days
    },
});

const TokenModel = Mongoose.model("token", tokenSchema);

module.exports = TokenModel;
