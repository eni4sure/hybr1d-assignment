const User = require("./../models/user.model");
const Order = require("./../models/order.model");
const Catalog = require("./../models/catalog.model");
const CustomError = require("./../utils/custom-error");

class BuyerService {
    async getAllSellers() {
        // Logic to get all sellers
        return await User.find({ role: "seller" }).select("username createdAt");
    }

    async getSellerCatalog(sellerId) {
        // Logic to get seller's catalog
        return await Catalog.findOne({ seller: sellerId });
    }

    async createOrder(data, buyerId, sellerId) {
        // Logic to create order
        if (!data.catalog) throw new CustomError("a seller catalog is required", 400);
        if (!data.products || data.products.length < 1) throw new CustomError("a minimum of one product is required", 400);

        const order = {
            buyer: buyerId,
            seller: sellerId,
            catalog: data.catalog,
            products: data.products
        };

        return await new Order(order).save();
    }
}

module.exports = new BuyerService();
