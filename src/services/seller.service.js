const Order = require("./../models/order.model");
const Catalog = require("./../models/catalog.model");
const CustomError = require("./../utils/custom-error");

class SellerService {
    async createCatalog(data, sellerId) {
        // Logic to create seller catalog
        if (!data.products || data.products.length < 1) throw new CustomError("a minimum of one product is required", 400);

        // Check if seller already has a catalog
        const catalog = await Catalog.findOne({ seller: sellerId });
        if (catalog) throw new CustomError("seller already has a catalog", 400);

        const context = {
            seller: sellerId,
            products: data.products
        };

        return await new Catalog(context).save();
    }

    async getSellerOrders(sellerId) {
        // Logic to get all seller orders
        return await Order.find({ seller: sellerId });
    }
}

module.exports = new SellerService();
