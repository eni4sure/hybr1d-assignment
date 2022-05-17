const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catalogSchema = new mongoose.Schema(
    {
        seller: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "user"
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
    this.populate("seller", "username createdAt");
    this.populate("products");
    next();
});

catalogSchema.pre("findOne", function (next) {
    this.populate("seller", "username createdAt");
    this.populate("products");
    next();
});

module.exports = mongoose.model("catalog", catalogSchema);
