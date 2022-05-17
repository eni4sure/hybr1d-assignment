const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema(
    {
        buyer: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "buyer"
        },
        seller: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "seller"
        },
        catalog: {
            type: Schema.Types.ObjectId,
            required: false,
            ref: "catalog"
        },
        products: {
            type: [
                {
                    type: Schema.Types.ObjectId,
                    required: true,
                    ref: "product"
                }
            ],
            required: true
        }
    },
    {
        timestamps: true
    }
);

orderSchema.pre("find", function (next) {
    this.populate("buyer");
    this.populate("seller");
    this.populate("catalog");
    this.populate("products");
    next();
});

orderSchema.pre("findOne", function (next) {
    this.populate("buyer");
    this.populate("seller");
    this.populate("catalog");
    this.populate("products");
    next();
});

module.exports = mongoose.model("order", orderSchema);
