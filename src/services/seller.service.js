const Order = require("./../models/order.model");
const Catalog = require("./../models/catalog.model");
const CustomError = require("./../utils/custom-error");

class SellerService {
    async createCatalog(data, sellerId) {
        // Logic to create seller catalog
        if (!data.products || data.products.length < 1) throw new CustomError("a minimum of one product is required", 400);

        const catalog = {
            seller: sellerId,
            products: data.products
        };

        return await new Catalog(catalog).save();
    }

    async getSellerOrders(sellerId) {
        // Logic to get all seller orders
        return await Order.find({ seller: sellerId });
    }
}

module.exports = new SellerService();
