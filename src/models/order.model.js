const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema(
    {
        buyer: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "user"
        },
        seller: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "user"
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
    this.populate("buyer", "username createdAt");
    this.populate("seller", "username createdAt");
    this.populate("catalog");
    this.populate("products");
    next();
});

orderSchema.pre("findOne", function (next) {
    this.populate("buyer", "username createdAt");
    this.populate("seller", "username createdAt");
    this.populate("catalog");
    this.populate("products");
    next();
});

module.exports = mongoose.model("order", orderSchema);
