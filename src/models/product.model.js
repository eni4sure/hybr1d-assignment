const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: mongoose.Types.Decimal128,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("product", productSchema);
