const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { BCRYPT_SALT } = require("./../config");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true,
            trim: true,
            enum: ["buyer", "seller", "admin"]
        }
    },
    {
        timestamps: true
    }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    const hash = await bcrypt.hash(this.password, BCRYPT_SALT);
    this.password = hash;

    next();
});

module.exports = mongoose.model("user", userSchema);
