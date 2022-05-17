const config = {
    APP_NAME: "hybr1d-assignment",
    JWT_SECRET: process.env.JWT_SECRET || "000-12345-000",
    MONGODB_URI: process.env.MONGODB_URI || process.env.MONGO_ATLAS_URI,
    BCRYPT_SALT: process.env.BCRYPT_SALT || 10,
    role: {
        USER: ["buyer", "seller"],
        BUYER: ["buyer"],
        SELLER: ["seller"],
        ADMIN: ["admin"]
    }
};

module.exports = config;
