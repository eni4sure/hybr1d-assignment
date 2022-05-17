const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema(
    {
        buyer: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "buyer"
        },
        catalog: {
            type: Schema.Types.ObjectId,
            required: false,
            ref: "buyer"
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

catalogSchema.pre("find", function (next) {
    this.populate("buyer");
    this.populate("catalog");
    this.populate("products");
    next();
});

catalogSchema.pre("findOne", function (next) {
    this.populate("buyer");
    this.populate("catalog");
    this.populate("products");
    next();
});

module.exports = mongoose.model("order", orderSchema);
