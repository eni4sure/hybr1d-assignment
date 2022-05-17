const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catalogSchema = new mongoose.Schema(
    {
        seller: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "seller"
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
    this.populate("seller");
    this.populate("products");
    next();
});

catalogSchema.pre("findOne", function (next) {
    this.populate("seller");
    this.populate("products");
    next();
});

module.exports = mongoose.model("catalog", catalogSchema);
