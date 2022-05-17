const User = require("./../models/user.model");
const CustomError = require("./../utils/custom-error");

class BuyerService {
    async getAllSellers() {
        return await User.find({ role: "seller" });
    }

    async getSellerCatalog(sellerId) {
        // Logic to get seller's catalog
        return null;
    }

    async createOrder(data, sellerId) {
        // Logic to create order
        return null;
    }
}

module.exports = new BuyerService();
